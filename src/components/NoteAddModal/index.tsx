import React, { useState, useEffect } from "react";
import { Modal, TouchableWithoutFeedback, Keyboard, View } from "react-native";
import {
  ModalContainer,
  ModalContent,
  ModalTitle,
  ButtonsContainer,
} from "./styles";
import { Input } from "../Input";
import { Button } from "../Button";
import theme from "../../constants/theme";

type NoteAddModalProps = {
  visible: boolean;
  onClose: () => void;
  onSave: (activityName: string) => void;
};

export default function NoteAddModal({
  visible,
  onClose,
  onSave,
}: NoteAddModalProps) {
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
              <Button
                title="Não"
                onPress={onClose}
                style={{
                  flex: 1,
                  height: 50,
                  marginRight: 10,
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: theme.colors.roxoPrincipal,
                  backgroundColor: theme.colors.background,
                }}
                labelStyle={{
                  fontSize: 18,
                  fontFamily: theme.fonts.extraBold,
                  color: theme.colors.roxoPrincipal,
                }}
              />

              <Button
                title="Salvar"
                onPress={handleSave}
                style={{
                  flex: 1,
                  height: 50,
                  marginLeft: 10,
                  borderRadius: 10,
                  backgroundColor: theme.colors.roxoPrincipal,
                }}
              />
            </ButtonsContainer>
          </ModalContent>
        </ModalContainer>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
