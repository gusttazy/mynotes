import React from "react";
import {
  SafeContainer,
  HeaderImage,
  Title,
  Subtitle,
  ButtonContainer,
  RegisterContainer,
  RegisterText,
  RegisterLink,
  RegisterLinkText,
} from "./styles";
import { Input } from "../../components/Input";
import { ButtonHome } from "../../components/Button";
import { BackButton } from "../../components/BackButton";

type LoginProps = {
  navigation: any;
};

export default function Login({ navigation }: LoginProps) {
  return (
    <SafeContainer>
      <BackButton />

      <HeaderImage source={require("../../assets/images/login.png")} />

      <Title>Entre na sua conta</Title>
      <Subtitle>Preencha com suas informações</Subtitle>

      <Input placeholder="E-mail" />
      <Input placeholder="Senha" secureTextEntry />

      <ButtonContainer>
        <ButtonHome title="Fazer Login" onPress={() => navigation.navigate("AppScreen")} />
      </ButtonContainer>

      <RegisterContainer>
        <RegisterText>Não tem cadastro? </RegisterText>
        <RegisterLink onPress={() => navigation.navigate("Register")}>
          <RegisterLinkText>Faça uma conta.</RegisterLinkText>
        </RegisterLink>
      </RegisterContainer>
    </SafeContainer>
  );
}
