/**
 * Componente NoteAddModal
 * 
 * Este componente é um modal que permite ao usuário criar uma nova anotação.
 * Ele contém:
 * - Campo para inserir o título da nova anotação
 * - Botão para cancelar a operação
 * - Botão para salvar a nova anotação
 */
import React, { useState, useEffect } from "react";
import { Modal, TouchableWithoutFeedback, Keyboard } from "react-native";
import {
  ModalContainer,
  ModalContent,
  ModalTitle,
  ButtonsContainer,
  CancelButton,
  CancelButtonText,
  SaveButton,
  SaveButtonText,
} from "./styles";
import { Input } from "../Input";

// Define as propriedades que o modal recebe
type NoteAddModalProps = {
  visible: boolean;           // Controla a visibilidade do modal
  onClose: () => void;       // Função chamada ao fechar o modal
  onSave: (activityName: string) => void;  // Função chamada ao salvar a nova anotação
};

export default function NoteAddModal({
  visible,
  onClose,
  onSave,
}: NoteAddModalProps) {
  // Estado para controlar o texto do título da nova anotação
  const [activityName, setActivityName] = useState("");

  // Limpa o campo de texto quando o modal é fechado
  useEffect(() => {
    if (!visible) {
      setActivityName("");
    }
  }, [visible]);

  // Função que salva a nova anotação
  const handleSave = () => {
    onSave(activityName);
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      {/* Permite fechar o teclado ao tocar fora do campo de texto */}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ModalContainer>
          <ModalContent>
            <ModalTitle>Nova Atividade</ModalTitle>
            <Input
              placeholder="Nome da atividade"
              value={activityName}
              onChangeText={setActivityName}
              autoFocus={true}
            />

            {/* Botões de ação do modal */}
            <ButtonsContainer>
              <CancelButton onPress={onClose}>
                <CancelButtonText>Cancelar</CancelButtonText>
              </CancelButton>

              <SaveButton onPress={handleSave}>
                <SaveButtonText>Salvar</SaveButtonText>
              </SaveButton>
            </ButtonsContainer>
          </ModalContent>
        </ModalContainer>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
