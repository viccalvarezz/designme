import React from "react";
import {
  Stack,
  StackProps,
  Grid,
  Heading,
  Text,
  Button,
  Box,
  VStack,
} from "@chakra-ui/react";

export type GameSessionCardProps = StackProps & {
  index: number;
  title: string;
  description: string;
};

export const GameSessionCard = ({
  index,
  title,
  description,
  ...others
}: GameSessionCardProps) => {
  return (
    <Stack spacing={8} {...others}>
      <Grid
        boxShadow="md"
        borderRadius="md"
        bgColor="green.400"
        p={8}
        h="full"
        display="flex"
        flexDir="row"
        justifyContent="space-between"
      >
        <Box
          borderRadius="full"
          w={35}
          h={35}
          bgColor="white"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          {index}
        </Box>

        <VStack>
          <Heading fontSize="lg" color="white">
            {title}
          </Heading>

          <Text color="white">{description}</Text>
        </VStack>

        <Button color="green.400" bgColor="white" w={28}>
          Start
        </Button>
      </Grid>
    </Stack>
  );
};
