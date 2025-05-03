import styled from "@emotion/native";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import theme from "../../styles/theme";

export const NoteButtonContainer = styled(TouchableOpacity)`
  position: absolute;
  bottom: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: ${theme.colors.roxoPrincipal};
  justify-content: center;
  align-items: center;
  elevation: 5;
  shadow-opacity: 0.3;
  shadow-radius: 5px;
  shadow-color: #000;
  shadow-offset: 0px 3px;
`;

export const NoteButtonIcon = styled(Feather)`
  color: white;
`;