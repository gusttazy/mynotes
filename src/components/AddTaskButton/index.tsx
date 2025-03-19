import React from "react";
import { AddButton, AddButtonIcon } from "./styles";

type AddTaskButtonProps = {
  onPress: () => void;
};

const AddTaskButton = ({ onPress }: AddTaskButtonProps) => {
  return (
    <AddButton onPress={onPress}>
      <AddButtonIcon name="plus" size={30} />
    </AddButton>
  );
};

export default AddTaskButton;
