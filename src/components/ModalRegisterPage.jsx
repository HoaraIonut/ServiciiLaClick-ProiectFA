import React from "react";

import {
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { useTheme } from "../store/Theme.context";

function ModalRegisterPage({ isOpen, onClose }) {
  let theme = useTheme().theme;

  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent
          bgColor={theme === "light" ? "" : "#282828"}
          color={theme === "light" ? "" : "#96EFFF"}
        >
          <ModalHeader>Date introduse greșit sau există deja cont</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Datele au fost introduse într-un mod greșit.</Text>
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={onClose}
              bgColor={theme === "light" ? "#282828" : "#96EFFF"}
              color={theme === "light" ? "white" : "#282828"}
              _hover={{ backgroundColor: "blue", color: "white" }}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalRegisterPage;
