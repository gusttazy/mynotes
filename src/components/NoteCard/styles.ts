import styled from "@emotion/native";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import theme from "../../styles/theme";

export const NoteCardContainer = styled(TouchableOpacity)`
  background-color: #f4f2ff;
  border-radius: 16px;
  padding: 60px;
  margin: 8px 20px;
  width: auto;
  min-height: 80px;
  justify-content: center;
  align-items: center;
`;

export const NoteText = styled(Text)`
  font-size: 20px;
  color: ${theme.colors.roxoPrincipal};
  font-family: ${theme.fonts.bold};
  text-align: center;
`;
