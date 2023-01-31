import React from "react";
import {
  Stack,
  StackProps,
  Grid,
  GridItem,
  Heading,
  Text,
  Button,
  Box,
  VStack,
} from "@chakra-ui/react";
import { LayoutContainer } from "@/components/Layout/LayoutContainer";

export type GameSessionCardProps = StackProps;

export const GameSessionCard = (props: GameSessionCardProps) => {
  return (
    <LayoutContainer>
      <Stack spacing={8}>
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
            1
          </Box>
          <VStack>
            <Heading fontSize="lg" color="white">
              Fonts
            </Heading>

            <Text color="white">description</Text>
          </VStack>
          <Button color="green.400" bgColor="white" w={28}>
            Start
          </Button>
        </Grid>
      </Stack>
    </LayoutContainer>
  );
};
