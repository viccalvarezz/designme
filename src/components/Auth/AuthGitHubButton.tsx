import { Button, ButtonProps } from "@chakra-ui/react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

export const AuthGitHubButton = (props: ButtonProps) => {
  const supabaseClient = useSupabaseClient();

  const handleClick = async () => {
    const { error } = await supabaseClient.auth.signInWithOAuth({
      provider: "github",
    });
  };

  return <Button onClick={handleClick} {...props} />;
};
