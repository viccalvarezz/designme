import { Container, ContainerProps } from "@chakra-ui/react";

export const LayoutContainer = (props: ContainerProps) => {
  return <Container maxW="container.xl" {...props} />;
};
