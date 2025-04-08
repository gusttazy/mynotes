import styled from "@emotion/native";
import { SafeAreaView, Image, View, TouchableOpacity, ScrollView } from "react-native";
import { Text } from "react-native-paper";
import theme from "../../styles/theme";

export const SafeContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: ${theme.colors.background};
`;

export const ScrollContainer = styled(ScrollView)`
  flex: 1;
`;

export const ContentContainer = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
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

export const InputContainer = styled(View)`
  width: 100%;
  gap: 20px;
  margin-bottom: 30px;
`;

export const ButtonContainer = styled(View)`
  width: 100%;
  margin-top: 20px;
  padding: 0 20px;
`;

export const RegisterContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const RegisterText = styled(Text)`
  font-size: 14px;
  color: ${theme.colors.roxoSecundario};
  font-family: ${theme.fonts.medium};
`;

export const RegisterLink = styled(TouchableOpacity)``;

export const RegisterLinkText = styled(Text)`
  color: ${theme.colors.roxoPrincipal};
  font-family: ${theme.fonts.bold};
`;
