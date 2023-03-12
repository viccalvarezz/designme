import { ReactNode, useState } from "react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { ChakraProvider } from "@chakra-ui/react";

export interface ProvidersWrapperProps {
  initialSession?: any;
  children: ReactNode;
}

export const ProvidersWrapper = ({
  initialSession,
  children,
}: ProvidersWrapperProps) => {
  const [supabaseClient] = useState(() =>
    createBrowserSupabaseClient({
      supabaseUrl: "https://supabase.co",
      supabaseKey: "key",
    })
  );

  return (
    <ChakraProvider resetCSS>
      <SessionContextProvider
        supabaseClient={supabaseClient}
        initialSession={initialSession}
      >
        {children}
      </SessionContextProvider>
    </ChakraProvider>
  );
};
