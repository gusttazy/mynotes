import styled from "@emotion/native";
import { TextInput, View } from "react-native";
import theme from "../../constants/theme";

export const Container = styled(View)`
  flex-direction: row;
  align-items: center;
  background-color: #F4F2FF;
  border-radius: 12px;
  padding: 0 10px;
  height: 50px;
`;

export const StyledInput = styled(TextInput)`
  flex: 1;
  color: ${theme.colors.roxoSecundario};
  font-family: ${theme.fonts.regular};
  font-size: 16px;
  margin-left: 10px;
`;

export const IconContainer = styled(View)`
  padding: 8px;
`;
