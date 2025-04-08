import React from "react";
import { ButtonProps } from "./types";
import { StyledButton } from "./styles";
import theme from "../../styles/theme";

export function ButtonHome({ title, onPress, style, disabled }: ButtonProps) {
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
