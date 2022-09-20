import { Button, ButtonProps } from "@chakra-ui/react";
import { supabaseClient as supabase } from "@supabase/auth-helpers-nextjs";

export const AuthGitHubButton = (props: ButtonProps) => {
  const handleClick = async () => {
    const { error } = await supabase.auth.signIn({
      provider: "github",
    });
  };

  return <Button onClick={handleClick} {...props} />;
};
