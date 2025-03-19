import React from "react";
import { ButtonProps } from "./types";
import { StyledButton } from "./styles";
import theme from "../../styles/theme";

export function ButtonHome({ title, onPress, style }: ButtonProps) {
  return (
    <StyledButton 
      mode="contained" 
      onPress={onPress} 
      style={style}
      labelStyle={{ 
        fontSize: 20, 
        fontFamily: theme.fonts.extraBold,
      }} 
    >
      {title}
    </StyledButton>
  );
}
