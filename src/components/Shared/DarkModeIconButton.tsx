import { useColorMode, IconButton, IconButtonProps } from "@chakra-ui/react";
import { FiSun, FiMoon } from "react-icons/fi";

export type DarkModeIconButtonProps = Omit<IconButtonProps, "aria-label">;

export const DarkModeIconButton = (props: DarkModeIconButtonProps) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const handleClick = () => {
    toggleColorMode();
  };

  return (
    <IconButton
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      icon={isDark ? <FiSun /> : <FiMoon />}
      onClick={handleClick}
      {...props}
    />
  );
};
