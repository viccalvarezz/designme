import { Answer } from "@/types";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  ModalProps,
} from "@chakra-ui/react";

export interface AnswerModalProps extends Omit<ModalProps, "children"> {
  answer?: Answer;
}

export const AnswerModal = ({
  answer,
  onClose,
  ...others
}: AnswerModalProps) => {
  return (
    <Modal onClose={onClose} {...others}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {answer?.is_correct ? "Right answer" : "Wrong answer"}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>{answer?.description}</ModalBody>

        <ModalFooter>
          <Button colorScheme="green" onClick={onClose}>
            Continue
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
