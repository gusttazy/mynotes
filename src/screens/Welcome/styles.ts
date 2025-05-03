import styled from "@emotion/native";
import { SafeAreaView, Image, View } from "react-native";
import { Text } from "react-native-paper";
import theme from "../../constants/theme";

export const SafeContainer = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.background};
  padding: 20px;
`;

export const HeaderImage = styled(Image)`
  width: 90%;
  height: 50%;
`;

export const Title = styled(Text)`
  font-size: 50px;
  color: ${theme.colors.roxoPrincipal};
  font-family: ${theme.fonts.extraBold};
  text-align: center;
`;

export const Subtitle = styled(Text)`
  font-size: 14px;
  color: ${theme.colors.roxoSecundario};
  font-family: ${theme.fonts.medium};
  text-align: center;
  margin-top: 10px;
  margin-bottom: 30px;
  max-width: 70%;
`;

export const ButtonContainer = styled(View)`
  width: 100%;
  padding: 0 20px;
`;
