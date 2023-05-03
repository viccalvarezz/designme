import { AppProps } from "next/app";
import { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import Head from "next/head";

import theme from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  return (
    <>
      <Head>
        <title>designme | learn UI/UX design</title>
        <link rel="icon" href="/favicon/logo.ico"></link>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="A fun, easy and fast way to learn the essentials of user interface design for the best user experience for free"
        ></meta>
        <meta name="keywords" content="design, ui, ux, learn" />
        <meta name="author" content="Victoria Alvarez Sordo" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ChakraProvider resetCSS theme={theme}>
        <SessionContextProvider
          supabaseClient={supabaseClient}
          initialSession={pageProps.initialSession}
        >
          <Component {...pageProps} />
        </SessionContextProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
