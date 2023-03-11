import { useSessionContext } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { ComponentType, ReactNode, useEffect } from "react";

export interface PrivatePageProps {
  children: ReactNode;
}

export const withPrivatePage =
  <P extends {}>(Component: ComponentType<P>): React.FC<P> =>
  (props: P) => {
    const PrivatePage = ({ children }: PrivatePageProps) => {
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

    Component.displayName = Component.displayName || Component.name || "Page";
    PrivatePage.displayName = `withPrivatePage(${Component.displayName})`;

    return (
      <PrivatePage>
        <Component {...props} />
      </PrivatePage>
    );
  };
