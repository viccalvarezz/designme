import { useSession } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";

export type AuthRedirectProps = { children?: ReactNode };

export const AuthRedirect = ({ children }: AuthRedirectProps) => {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.replace("/games");
    }
  }, [router, session]);

  if (session) {
    return null;
  }

  return <>{children}</>;
};
