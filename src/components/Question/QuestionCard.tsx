import React from "react";
import {
  Stack,
  StackProps,
  Text,
  Button,
  IconButton,
  Box,
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
        color="grey.800"
      >
        {index}
      </Box>

      <Stack flex={1}>
        <Text color="white">{question.description}</Text>
      </Stack>

      <Stack direction="row" alignItems="center" spacing={6}>
        {answer ? (
          <>
            {answer?.is_correct && (
              <Box as={BiCheckCircle} w={6} h={6} color="white" />
            )}

            {!answer.is_correct && (
              <Box as={BiXCircle} w={6} h={6} color="white" />
            )}

            <NextLink href={`/questions/${question.id}`} passHref>
              <Button as="a" color="green.400" bgColor="white">
                Retry
              </Button>
            </NextLink>
          </>
        ) : (
          <NextLink href={`/questions/${question.id}`} passHref>
            <Button as="a" color="green.400" bgColor="white">
              Start
            </Button>
          </NextLink>
        )}
      </Stack>
    </Stack>
  );
};
