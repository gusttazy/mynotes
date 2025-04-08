import styled from "@emotion/native";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import theme from "../../styles/theme";

export const ActivityCardContainer = styled(TouchableOpacity)`
  background-color: #F4F2FF;
  border-radius: 16px;
  padding: 60px;
  margin: 8px 20px;
  width: auto;
  min-height: 80px;
  justify-content: center;
  align-items: center;
`;

export const ActivityText = styled(Text)`
  font-size: 20px;
  color: ${theme.colors.roxoPrincipal};
  font-family: ${theme.fonts.bold};
  text-align: center;
`;
