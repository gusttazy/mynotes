import { StyleProp, TextStyle, ViewStyle } from "react-native";

export interface ButtonProps {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  labelStyle?: StyleProp<TextStyle>; // 👈 Adicionado aqui
}
