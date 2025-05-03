import styled from "@emotion/native";
import { SafeAreaView, View, TextInput } from "react-native";
import theme from "../../constants/theme";

export const SafeContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: ${theme.colors.background};
`;

export const HeaderContainer = styled(View)`
  width: 100%;
  background-color: ${theme.colors.roxoPrincipal};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 130px 20px 30px 20px;
`;

export const HeaderTitleInput = styled(TextInput)`
  font-size: 32px;
  color: #fff;
  margin-left: 10px;
  font-family: ${theme.fonts.bold};
`;

export const ContentContainer = styled(View)`
  flex: 1;
  padding: 20px;
`;

export const ContentInput = styled(TextInput)`
  font-size: 16px;
  color: ${theme.colors.texto};
  font-family: ${theme.fonts.regular};
  min-height: 300px;
`;
