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
} from "@chakra-ui/react";
import LogoIcon from "@/assets/svgs/logo.svg";

export type HomeHeroProps = StackProps;

export const HomeHero = (props: HomeHeroProps) => {
  return (
    <Stack as="section" py={16} {...props}>
      <Container maxW="container.sm">
        <Stack spacing={8} align="center">
          <Stack spacing={6} align="center" textAlign="center">
            <Box display="flex" justifyContent="center">
              <Box as={LogoIcon} height={{ base: 16, md: 24 }} width="auto" />
            </Box>

            <Heading
              as="h1"
              fontSize="1.75rem"
              color="grey.500"
              fontWeight="bold"
            >
              Learn the basics of UI/UX design
            </Heading>

            <Text fontSize="lg">
              A fun, easy and fast way to learn the essentials of user interface
              design for the best user experience for{` `}
              <Text as="b" color="green.500">
                free
              </Text>
            </Text>
          </Stack>

          <ButtonGroup size="md" spacing={4}>
            <Button>Learn more</Button>

            <Button
              as="a"
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/uo266618"
              variant="outline"
            >
              Sign up
            </Button>
          </ButtonGroup>
        </Stack>
      </Container>
    </Stack>
  );
};
