import {
  Avatar,
  Stack,
  Box,
  StackProps,
  useColorModeValue,
} from "@chakra-ui/react";
import { AuthGitHubButton } from "@/components/Auth/AuthGitHubButton";
import { useUser } from "@supabase/auth-helpers-react";
import LogoIcon from "@/assets/svgs/logo.svg";
import { DarkModeIconButton } from "@/components/Shared/DarkModeIconButton";
import { LayoutContainer } from "./LayoutContainer";
import { LayoutMenuButton } from "./LayoutMenuButton";
import Link from "next/link";

export const LayoutHeader = ({ children, ...others }: StackProps) => {
  const user = useUser();

  return (
    <Stack
      as="header"
      position="sticky"
      top={0}
      h={16}
      bgColor={useColorModeValue("white", "grey.800")}
      boxShadow="lg"
      zIndex="docked"
      {...others}
    >
      <LayoutContainer h="full">
        <Stack direction="row" align="center" h="full" justify="space-between">
          <Link href={user ? "/games" : "/"} passHref>
            <Box as="a" aria-label="Home">
              <Box as={LogoIcon} h={10} w="auto" cursor="pointer" />
            </Box>
          </Link>

          {children}

          <Stack direction="row" spacing="2">
            <DarkModeIconButton borderRadius="full" variant="ghost" />

            {user ? (
              <LayoutMenuButton aria-label="Open settings menu">
                <Avatar
                  size="sm"
                  name={user.user_metadata.name}
                  src={user.user_metadata.avatar_url}
                />
              </LayoutMenuButton>
            ) : (
              <AuthGitHubButton colorScheme="green">Login</AuthGitHubButton>
            )}
          </Stack>
        </Stack>
      </LayoutContainer>
    </Stack>
  );
};
