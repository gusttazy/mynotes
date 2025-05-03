import React from "react";
import { ButtonProps } from "./types";
import { StyledButton } from "./styles";
import theme from "../../constants/theme";

export function Button({ title, onPress, style, disabled }: ButtonProps) {
  return (
    <StyledButton 
      mode="contained" 
      onPress={onPress} 
      style={style}
      disabled={disabled}
      labelStyle={{ 
        fontSize: 20, 
        fontFamily: theme.fonts.extraBold,
        color: theme.colors.background,
      }} 
    >
      {title}
    </StyledButton>
  );
}
