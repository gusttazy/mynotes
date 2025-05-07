import React from "react";
import { ButtonProps } from "./types";
import { StyledButton } from "./styles";
import theme from "../../constants/theme";

export function Button({ title, onPress, style, disabled, labelStyle }: ButtonProps) {
  return (
    <StyledButton
      mode="contained"
      onPress={onPress}
      style={style}
      disabled={disabled}
      labelStyle={labelStyle ?? {
        fontSize: 18,
        fontFamily: theme.fonts.bold,
        color: theme.colors.background,
      }}
    >
      {title}
    </StyledButton>
  );
}
