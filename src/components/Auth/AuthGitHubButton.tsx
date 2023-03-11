import { Button, ButtonProps } from "@chakra-ui/react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useUser } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";

export const AuthGitHubButton = (props: ButtonProps) => {
  const supabaseClient = useSupabaseClient();
  const router = useRouter();
  const user = useUser();

  const handleClick = async () => {
    if (user) {
      router.push("/games");
      return;
    }

    await supabaseClient.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${window.location.protocol}//${window.location.host}/games`,
      },
    });
  };

  return <Button onClick={handleClick} {...props} />;
};
