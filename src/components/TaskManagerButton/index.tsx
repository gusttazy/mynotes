import React from "react";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Container, MainButton } from "./styles";

type TaskManagerButtonProps = {
  onSave: () => void;
};

export default function TaskManagerButton({ onSave }: TaskManagerButtonProps) {
  return (
    <Container>
      <TouchableOpacity onPress={onSave}>
        <MainButton>
          <Feather name="check" size={28} color="#fff" />
        </MainButton>
      </TouchableOpacity>
    </Container>
  );
}
