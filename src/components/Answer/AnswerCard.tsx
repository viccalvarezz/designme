import React from "react";
import {
  Stack,
  StackProps,
  Button,
  Image,
  AspectRatio,
  ButtonGroup,
  Box,
} from "@chakra-ui/react";
import { Answer } from "@/types";
import { useServices } from "@/components/Service/useServices";

export interface AnswerCardProps extends Omit<StackProps, "onSelect"> {
  userId: string;
  answer: Answer;
  onSelect?: (
    event: React.MouseEvent<HTMLButtonElement>,
    answer: Answer
  ) => void;
}

export const AnswerCard = ({
  userId,
  answer,
  onSelect,
  ...others
}: AnswerCardProps) => {
  const services = useServices();

  const handleSelect = async (event: React.MouseEvent<HTMLButtonElement>) => {
    await services.answers.upsert({
      userId,
      questionId: answer.question_id,
      answerId: answer.id,
    });

    onSelect(event, answer);
  };

  return (
    <Stack as="article" spacing={8} {...others}>
      <AspectRatio
        position="relative"
        ratio={1}
        boxShadow="md"
        borderRadius="lg"
      >
        <Box w="full" h="full">
          <Image
            src={answer.src}
            alt={answer.alt}
            objectFit="scale-down"
            w="full"
            h="full"
          />
        </Box>
      </AspectRatio>

      <ButtonGroup w="full" justifyContent="center">
        <Button variant="solid" colorScheme="green" onClick={handleSelect}>
          Select
        </Button>
      </ButtonGroup>
    </Stack>
  );
};
