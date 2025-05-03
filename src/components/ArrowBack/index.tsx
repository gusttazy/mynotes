import React from "react";
import { ArrowLeft } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";
import { Container } from "./styles";
import theme from "../../styles/theme";

type ArrowBackProps = {
  color?: string;
  style?: object;
};

export function ArrowBack({ color }: ArrowBackProps) {
  const navigation = useNavigation();

  return (
    <Container onPress={() => navigation.goBack()}>
      <ArrowLeft size={32} color={color || theme.colors.roxoPrincipal} weight="bold" />
    </Container>
  );
};