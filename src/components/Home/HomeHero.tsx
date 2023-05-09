import React from "react";
import {
  Stack,
  Box,
  Text,
  Button,
  Heading,
  ButtonGroup,
  Container,
  StackProps,
  useColorMode,
} from "@chakra-ui/react";
import { LayoutContainer } from "@/components/Layout/LayoutContainer";
import { AuthGitHubButton } from "../Auth/AuthGitHubButton";
import LogoIcon from "@/assets/svgs/logo.svg";

export type HomeHeroProps = StackProps;

export const HomeHero = (props: HomeHeroProps) => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Stack as="section" py={16} {...props}>
      <LayoutContainer maxW="container.sm">
        <Stack spacing={8} align="center">
          <Stack spacing={6} align="center" textAlign="center">
            <Box display="flex" justifyContent="center">
              <Box as={LogoIcon} h={{ base: 16, md: 24 }} w="auto" />
            </Box>

            <Heading
              as="h1"
              fontSize="1.75rem"
              color={isDark ? "white" : "grey.800"}
              fontWeight="bold"
            >
              Learn the basics of UI/UX design
            </Heading>

            <Text fontSize="lg">
              A fun, easy and fast way to learn the essentials of user interface
              design for the best user experience for{` `}
              <Text as="b" color="green.600">
                free
              </Text>
            </Text>
          </Stack>

          <ButtonGroup size="md" spacing={4}>
            <Button
              as="a"
              rel="noopener noreferrer"
              target="_blank"
              variant="outline"
              colorScheme="green"
              href="https://github.com/viccalvarezz"
            >
              Code base
            </Button>

            <AuthGitHubButton colorScheme="green">
              Start learning
            </AuthGitHubButton>
          </ButtonGroup>
        </Stack>
      </LayoutContainer>
    </Stack>
  );
};
