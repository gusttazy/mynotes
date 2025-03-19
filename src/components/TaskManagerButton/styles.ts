import styled from "@emotion/native";
import { Animated } from "react-native";
import theme from "../../styles/theme";

export const Container = styled.View`
  position: absolute;
  bottom: 30px;
  right: 30px;
  align-items: center;
`;

export const MainButton = styled(Animated.View)`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: ${theme.colors.roxoPrincipal};
  justify-content: center;
  align-items: center;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 8;
`;
