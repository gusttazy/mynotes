/**
 * Componente NoteRemoveModal
 * 
 * Este componente é um modal de confirmação que aparece quando o usuário
 * tenta remover uma anotação. Ele serve para evitar remoções acidentais.
 * 
 * Funcionalidades:
 * - Exibe mensagem de confirmação
 * - Permite cancelar a operação
 * - Permite confirmar a remoção
 */
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

// Define as propriedades que o modal recebe
type NoteRemoveModalProps = {
  visible: boolean;     // Controla a visibilidade do modal
  onClose: () => void; // Função chamada ao cancelar a remoção
  onConfirm: () => void; // Função chamada ao confirmar a remoção
};

export default function NoteRemoveModal({
  visible,
  onClose,
  onConfirm,
}: NoteRemoveModalProps) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <ModalContainer>
        <ModalContent>
          {/* Título do modal de confirmação */}
          <ModalTitle>Remover Atividade?</ModalTitle>
          
          {/* Botões de ação do modal */}
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
