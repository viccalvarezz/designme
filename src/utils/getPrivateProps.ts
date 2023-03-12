import {
  createServerSupabaseClient,
  Session,
} from "@supabase/auth-helpers-nextjs";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";

type GetPrivateServerSideProps = (
  context: GetServerSidePropsContext,
  session: Session
) => Promise<GetServerSidePropsResult<any>>;

interface GetPrivateServerSidePropsOptions {
  isRequired?: boolean;
}

export const getPrivateProps =
  <P extends Record<string, any>>(
    getServerSideProps?: GetPrivateServerSideProps,
    options: GetPrivateServerSidePropsOptions = {}
  ) =>
  async (
    ctx: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<P>> => {
    const supabase = createServerSupabaseClient(ctx);
    const { isRequired } = options;
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (isRequired && !session) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }

    const data = getServerSideProps
      ? await getServerSideProps(ctx, session)
      : {};

    return {
      ...data,
      // @ts-ignore
      props: { ...data.props, initialSession: session },
    };
  };
