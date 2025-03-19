import React from "react";
import { TextInputProps } from "react-native";
import { Container, StyledInput } from "./styles";

type InputProps = TextInputProps & {
  placeholder: string;
};

export function Input({ placeholder, ...rest }: InputProps) {
  return (
    <Container>
      <StyledInput placeholder={placeholder} placeholderTextColor="#a69fca" {...rest} />
    </Container>
  );
}
