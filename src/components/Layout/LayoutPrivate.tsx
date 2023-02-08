import { useSessionContext } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { ReactChildren, ReactNode, useEffect } from "react";

export interface LayoutPrivateProps {
  children: ReactNode;
}

export const LayoutPrivate = ({ children }: LayoutPrivateProps) => {
  const { isLoading, session } = useSessionContext();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !session) {
      router.push("/");
      return;
    }
  }, [router, isLoading, session]);

  if (isLoading || !session) {
    return null;
  }

  return <>{children}</>;
};
