import styled from "@emotion/native";
import { TextInput, View } from "react-native";
import theme from "../../styles/theme";

export const Container = styled(View)`
  width: 90%;
  margin-bottom: 15px;
`;

export const StyledInput = styled(TextInput)`
  height: 60px;
  background-color: ${theme.colors.cardsFundo};
  border-radius: 8px;
  padding: 10px;
  font-size: 15px;
  color: ${theme.colors.roxoSecundario};
  font-family: ${theme.fonts.medium};
`;
