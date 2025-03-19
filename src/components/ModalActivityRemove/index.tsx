import React from "react";
import { Modal } from "react-native";
import {
  ModalContainer,
  ModalContent,
  ModalTitle,
  ButtonsContainer,
  CancelButton,
  CancelButtonText,
  DeleteButton,
  DeleteButtonText,
} from "./styles";

type ModalActivityRemoveProps = {
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

export default function ModalActivityRemove({
  visible,
  onClose,
  onConfirm,
}: ModalActivityRemoveProps) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <ModalContainer>
        <ModalContent>
          <ModalTitle>Remover Atividade?</ModalTitle>
          <ButtonsContainer>
            <CancelButton onPress={onClose}>
              <CancelButtonText>Cancelar</CancelButtonText>
            </CancelButton>
            <DeleteButton onPress={onConfirm}>
              <DeleteButtonText>Remover</DeleteButtonText>
            </DeleteButton>
          </ButtonsContainer>
        </ModalContent>
      </ModalContainer>
    </Modal>
  );
}
