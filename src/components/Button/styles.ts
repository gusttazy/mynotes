import styled from "@emotion/native";
import { Button } from "react-native-paper";
import theme from "../../styles/theme";

export const StyledButton = styled(Button)`
  background-color: ${theme.colors.roxoPrincipal};
  color: ${theme.colors.background};
  border-radius: 14px;
  padding: 6px;
  
  &:disabled {
    background-color: ${theme.colors.roxoPrincipal};
  }
`;
