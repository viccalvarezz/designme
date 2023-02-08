import { Button, ButtonProps } from "@chakra-ui/react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

export const AuthGitHubButton = (props: ButtonProps) => {
  const supabaseClient = useSupabaseClient();

  const handleClick = async () => {
    const { data, error } = await supabaseClient.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: window.location.origin + "/home",
      },
    });
  };

  return <Button onClick={handleClick} {...props} />;
};
