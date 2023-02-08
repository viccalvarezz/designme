import { Button, ButtonProps } from "@chakra-ui/react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";

export const AuthGitHubButton = (props: ButtonProps) => {
  const supabaseClient = useSupabaseClient();
  const session = useSession();
  const router = useRouter();

  const handleClick = async () => {
    if (session) {
      router.push("/home");
      return;
    }

    const { data, error } = await supabaseClient.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: window.location.origin,
      },
    });
  };

  return <Button onClick={handleClick} {...props} />;
};
