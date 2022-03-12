import { Container, Box, Flex, Stack, Heading, Text } from "@chakra-ui/react";
import { Logo } from "../components/Logo";

const Index = () => {
  return (
    <>
      <Box width="100%">
        <Container>
          <Stack py={12} spacing={4} alignItems="center" textAlign="center">
            <Logo />

            <Heading as="h1" fontSize="3xl">
              Learn the basics of UI/UX design
            </Heading>

            <Text>
              A fun, easy and fast way to learn the essentials of user interface
              design for the best user experience for free.
            </Text>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Index;
