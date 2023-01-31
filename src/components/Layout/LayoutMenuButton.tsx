import {
  Menu,
  MenuList,
  MenuItem,
  MenuButtonProps,
  MenuButton,
  Portal,
} from "@chakra-ui/react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

export const LayoutMenuButton = ({ children, ...others }: MenuButtonProps) => {
  const supabaseClient = useSupabaseClient();

  const handleLogoutClick = async () => {
    const { error } = await supabaseClient.auth.signOut();
  };

  return (
    <Menu>
      <MenuButton {...others}>{children}</MenuButton>

      <Portal>
        <MenuList>
          <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
        </MenuList>
      </Portal>
    </Menu>
  );
};
