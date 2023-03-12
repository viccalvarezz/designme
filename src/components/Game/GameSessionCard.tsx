import React from "react";
import {
  Stack,
  StackProps,
  Heading,
  Text,
  Button,
  Box,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { Game } from "@/types";

export type GameSessionCardProps = StackProps & {
  index: number;
  game: Game;
};

export const GameSessionCard = ({
  index,
  game,
  ...others
}: GameSessionCardProps) => {
  return (
    <Stack
      spacing={8}
      direction="row"
      boxShadow="md"
      borderRadius="md"
      bgColor="green.400"
      p={8}
      alignItems="center"
      {...others}
    >
      <Box
        borderRadius="full"
        minW={35}
        h={35}
        bgColor="white"
        display="flex"
        boxShadow="lg"
        fontWeight="bold"
        justifyContent="center"
        alignItems="center"
      >
        {index}
      </Box>

      <Stack flex={1} alignItems="flex-start">
        <Heading fontSize="lg" color="white">
          {game.name}
        </Heading>

        <Text color="white">{game.description}</Text>
      </Stack>

      <Stack>
        <NextLink href={`/games/${game.id}`} passHref>
          <Button as="a" color="green.400" bgColor="white">
            Start
          </Button>
        </NextLink>
      </Stack>
    </Stack>
  );
};
