import { Stack, StackProps, Text } from "@chakra-ui/react";
import { LayoutContainer } from "./LayoutContainer";

export const LayoutFooter = (props: StackProps) => {
  return (
    <Stack as="footer">
      <LayoutContainer h="full">
        <Stack
          direction="column"
          align="center"
          h="full"
          justify="space-between"
          p="12"
        >
          <Text>Copyright © 2023 designme</Text>
          <Text>Made with ❤️ by @viccalvarezz</Text>
        </Stack>
      </LayoutContainer>
    </Stack>
  );
};
