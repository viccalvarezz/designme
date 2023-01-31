import React from "react";
import {
  Avatar,
  Stack,
  StackProps,
  Grid,
  Heading,
  Text,
  Button,
  Box,
  VStack,
} from "@chakra-ui/react";

export type GameProfileBoxProps = StackProps & { name: string };

export const GameProfileBox = ({ name, ...others }: GameProfileBoxProps) => {
  return (
    <Stack
      as="article"
      spacing={6}
      bgColor="orange.100"
      p={6}
      borderRadius="md"
      alignItems="center"
      w="full"
      {...others}
    >
      <Avatar name={name} size="xl" />
      <Heading as="h2" fontSize="xl">
        {name}
      </Heading>
    </Stack>
  );
};
