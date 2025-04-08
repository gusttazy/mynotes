import styled from "@emotion/native";
import { SafeAreaView, Image, View, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import theme from "../../styles/theme";

export const SafeContainer = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.background};
  padding: 20px;
`;

export const HeaderImage = styled(Image)`
  width: 100%;
  height: 30%;
  margin-bottom: 10px;
`;

export const Title = styled(Text)`
  font-size: 35px;
  color: ${theme.colors.roxoPrincipal};
  font-family: ${theme.fonts.extraBold};
  text-align: center;
`;

export const Subtitle = styled(Text)`
  font-size: 14px;
  color: ${theme.colors.roxoSecundario};
  font-family: ${theme.fonts.semiBold};
  text-align: center;
  margin-top: 5px;
  margin-bottom: 20px;
`;

export const ButtonContainer = styled(View)`
  width: 100%;
  margin-top: 20px;
  padding: 0 20px;
`;

export const LoginContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
`;

export const LoginText = styled(Text)`
  font-size: 14px;
  color: ${theme.colors.roxoSecundario};
  font-family: ${theme.fonts.medium};
`;

export const LoginLink = styled(TouchableOpacity)``;

export const LoginLinkText = styled(Text)`
  color: ${theme.colors.roxoPrincipal};
  font-family: ${theme.fonts.bold};
`;
