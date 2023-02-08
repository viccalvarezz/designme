import {
  Avatar,
  Stack,
  Box,
  StackProps,
  useColorModeValue,
} from "@chakra-ui/react";
import { AuthGitHubButton } from "@/components/Auth/AuthGitHubButton";
import { useSession } from "@supabase/auth-helpers-react";
import LogoIcon from "@/assets/svgs/logo.svg";
import { DarkModeIconButton } from "@/components/Shared/DarkModeIconButton";
import { LayoutContainer } from "./LayoutContainer";
import { LayoutMenuButton } from "./LayoutMenuButton";
import { useRouter } from "next/router";
import Link from "next/link";

export const LayoutHeader = ({ children, ...others }: StackProps) => {
  const router = useRouter();
  const session = useSession();

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
          <Link href="/">
            <Box as={LogoIcon} h={10} w="auto" cursor="pointer" />
          </Link>

          {children}

          <Stack direction="row" spacing="2">
            <DarkModeIconButton borderRadius="full" variant="ghost" />

            {session ? (
              <LayoutMenuButton aria-label="Open settings menu">
                <Avatar size="sm" name={session.user.email} />
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
