import styled from "@emotion/native";
import { SafeAreaView, View, TextInput } from "react-native";
import { Text } from "react-native-paper";
import { Feather } from "@expo/vector-icons";
import theme from "../../styles/theme";

export const SafeContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: ${theme.colors.background};
`;

export const HeaderContainer = styled(View)`
  margin-top: 40px;
  margin-bottom: 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export const GreetingText = styled(Text)`
  font-size: 40px;
  color: ${theme.colors.roxoPrincipal};
  font-family: ${theme.fonts.extraBold};
`;

export const LogoutButton = styled.TouchableOpacity`
  paddingTop: 10px;
  paddingRight: 8px;
`;

export const SearchContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  background-color: #F4F2FF;
  border-radius: 12px;
  padding: 0 10px;
  margin-bottom: 20px;
  margin: 0 20px;
`;

export const SearchIcon = styled(Feather)`
  color: ${theme.colors.roxoSecundario};
  margin-right: 10px;
`;

export const SearchInput = styled(TextInput)`
  flex: 1;
  height: 50px;
  color: ${theme.colors.roxoSecundario};
  font-family: ${theme.fonts.regular};
  font-size: 16px;
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
