import { Button, ButtonProps } from "@chakra-ui/react";
import { supabaseClient as supabase } from "@supabase/auth-helpers-nextjs";

export const AuthLogoutButton = (props: ButtonProps) => {
  const handleClick = async () => {
    const { error } = await supabase.auth.signOut();
  };

  return <Button onClick={handleClick} {...props} />;
};
