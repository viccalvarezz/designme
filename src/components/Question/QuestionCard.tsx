import React from "react";
import {
  Stack,
  StackProps,
  Grid,
  Text,
  Button,
  Box,
  VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { Question } from "@/types";
import { BiCheckCircle, BiXCircle } from "react-icons/bi";

export type QuestionCardProps = StackProps & {
  index: number;
  question: Question;
};

export const QuestionCard = ({
  index,
  question,
  ...others
}: QuestionCardProps) => {
  const answer = question.answer;

  console.log(answer);

  return (
    <Stack spacing={8} {...others}>
      <Grid
        boxShadow="md"
        borderRadius="md"
        bgColor="green.400"
        p={8}
        gap={4}
        h="full"
        display="flex"
        flexDir="row"
        justifyContent="space-between"
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

        <VStack alignItems="flex-start">
          <Text color="white">{question.description}</Text>
        </VStack>

        {!answer && (
          <NextLink href={`/questions/${question.id}`} passHref>
            <Button as="a" color="green.400" bgColor="white">
              Start
            </Button>
          </NextLink>
        )}

        {answer?.is_correct && (
          <Box as={BiCheckCircle} w={8} h={8} color="white" />
        )}

        {answer && !answer.is_correct && (
          <Box as={BiXCircle} w={8} h={8} color="white" />
        )}
      </Grid>
    </Stack>
  );
};
