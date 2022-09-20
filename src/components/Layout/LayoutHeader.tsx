import { Avatar, Stack, Text, StackProps } from "@chakra-ui/react";
import { AuthGitHubButton } from "@/components/Auth/AuthGitHubButton";
import { useUser } from "@supabase/auth-helpers-react";
import { LayoutContainer } from "./LayoutContainer";
import { LayoutMenuButton } from "./LayoutMenuButton";

export const LayoutHeader = ({ children, ...others }: StackProps) => {
  const { user, error } = useUser();

  console.log(user);

  return (
    <Stack as="header" h={16} boxShadow="lg" {...others}>
      <LayoutContainer h="full">
        <Stack direction="row" align="center" h="full" justify="space-between">
          <Text>Logo</Text>

          {children}

          {user ? (
            <LayoutMenuButton>
              <Avatar size="sm" name={user.email} />
            </LayoutMenuButton>
          ) : (
            <AuthGitHubButton>Login</AuthGitHubButton>
          )}
        </Stack>
      </LayoutContainer>
    </Stack>
  );
};
