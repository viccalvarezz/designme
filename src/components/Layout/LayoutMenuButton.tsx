import {
  Menu,
  MenuList,
  MenuItem,
  MenuButtonProps,
  MenuButton,
  Portal,
} from "@chakra-ui/react";
import { supabaseClient as supabase } from "@supabase/auth-helpers-nextjs";

export const LayoutMenuButton = ({ children, ...others }: MenuButtonProps) => {
  const handleLogoutClick = async () => {
    const { error } = await supabase.auth.signOut();
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
