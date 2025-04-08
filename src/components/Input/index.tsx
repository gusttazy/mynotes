import React from "react";
import { TextInputProps, View } from "react-native";
import { Container, StyledInput, IconContainer } from "./styles";

type InputProps = TextInputProps & {
  placeholder: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
};

export function Input({ placeholder, left, right, ...rest }: InputProps) {
  return (
    <Container>
      {left && <IconContainer>{left}</IconContainer>}
      <StyledInput placeholder={placeholder} placeholderTextColor="#a69fca" {...rest} />
      {right && <IconContainer>{right}</IconContainer>}
    </Container>
  );
}
