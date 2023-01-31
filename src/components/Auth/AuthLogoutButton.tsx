import { Button, ButtonProps } from "@chakra-ui/react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

export const AuthLogoutButton = (props: ButtonProps) => {
  const supabaseClient = useSupabaseClient();

  const handleClick = async () => {
    const { error } = await supabaseClient.auth.signOut();
  };

  return <Button onClick={handleClick} {...props} />;
};
