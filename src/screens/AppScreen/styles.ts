import styled from "@emotion/native";
import { SafeAreaView, View } from "react-native";
import { Text } from "react-native-paper";
import theme from "../../styles/theme";

export const SafeContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: ${theme.colors.background};
`;

export const HeaderContainer = styled(View)`
  background-color: ${theme.colors.roxoPrincipal};
  padding: 20px;
  padding-top: 60px;
  padding-bottom: 30px;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
`;

export const HeaderContent = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const GreetingText = styled(Text)`
  font-size: 30px;
  color: ${theme.colors.white};
  font-family: ${theme.fonts.bold};
`;

export const LogoutButton = styled.TouchableOpacity`
  padding: 8px;
`;

export const SearchContainer = styled(View)`
  margin-top: 10px;
`;

export const ContentContainer = styled(View)`
  flex: 1;
  padding: 20px;
`;

export const EmptyListContainer = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

export const EmptyListText = styled(Text)`
  font-size: 16px;
  color: ${theme.colors.roxoSecundario};
  font-family: ${theme.fonts.medium};
  text-align: center;
`;
