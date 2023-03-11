import { GetServerSideProps } from "next";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { Heading, Stack } from "@chakra-ui/react";
import { Database } from "@/types/supabase";
import { LayoutHeader } from "@/components/Layout/LayoutHeader";
import { LayoutFooter } from "@/components/Layout/LayoutFooter";
import { LayoutMain } from "@/components/Layout/LayoutMain";
import { LayoutContainer } from "@/components/Layout/LayoutContainer";
import { QuestionCard } from "@/components/Question/QuestionCard";
import { createServices } from "@/services";
import { withPrivatePage } from "@/utils/withPrivatePage";
import { getPrivateProps } from "@/utils/getPrivateProps";

const GameDetailPage = ({ game, questions }) => {
  return (
    <>
      <LayoutHeader />

      <LayoutMain>
        <LayoutContainer>
          <Stack spacing={8}>
            <Heading>{game?.name}</Heading>

            <Stack flex={1} spacing={10}>
              {questions.map((question, index) => (
                <QuestionCard
                  key={index}
                  index={index + 1}
                  question={question}
                />
              ))}
            </Stack>
          </Stack>
        </LayoutContainer>
      </LayoutMain>

      <LayoutFooter />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = getPrivateProps(
  async (ctx, session) => {
    const { params } = ctx;
    const id = Number(params.id as string);

    const supabase = createServerSupabaseClient<Database>(ctx);
    const services = createServices({ supabase });

    const [game, questions] = await Promise.all([
      services.games.fetchOne({ id }),
      services.questions.fetchAll({ gameId: id, userId: session.user.id }),
    ]);

    if (!game) {
      return { notFound: true };
    }

    return {
      props: {
        game,
        questions,
      },
    };
  },
  { isRequired: true }
);

export default withPrivatePage(GameDetailPage);
