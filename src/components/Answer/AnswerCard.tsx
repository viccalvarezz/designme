import React from "react";
import {
  Stack,
  StackProps,
  Button,
  Image,
  AspectRatio,
  ButtonGroup,
} from "@chakra-ui/react";
import { Answer } from "@/types";
import { useServices } from "../Service/useServices";

export type AnswerCardProps = StackProps & {
  userId: string;
  questionId: number;
  answer: Answer;
  onSelect?: React.MouseEventHandler<HTMLButtonElement>;
};

export const AnswerCard = ({
  userId,
  questionId,
  answer,
  onSelect,
  ...others
}: AnswerCardProps) => {
  const services = useServices();

  console.log(answer);

  const handleSelect = async (event) => {
    await services.answers.create({
      userId,
      questionId,
      answerId: answer.id,
    });

    onSelect(event);
  };

  return (
    <Stack as="article" spacing={8} {...others}>
      <AspectRatio position="relative" ratio={1}>
        <Image
          boxShadow="md"
          src={answer.src}
          alt={answer.alt}
          objectFit="cover"
          borderRadius="lg"
          w="full"
          h="full"
        />
      </AspectRatio>

      <ButtonGroup w="full" justifyContent="center">
        <Button variant="solid" colorScheme="green" onClick={handleSelect}>
          Select
        </Button>
      </ButtonGroup>
    </Stack>
  );
};
