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

type ActivityModalProps = {
  visible: boolean;
  onClose: () => void;
  onSave: (activityName: string) => void;
};

export default function ActivityModal({
  visible,
  onClose,
  onSave,
}: ActivityModalProps) {
  const [activityName, setActivityName] = useState("");

  useEffect(() => {
    if (!visible) {
      setActivityName("");
    }
  }, [visible]);

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
