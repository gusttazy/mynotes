import React, { useState } from "react";
import {
  SafeContainer,
  HeaderImage,
  Title,
  Subtitle,
  ButtonContainer,
  LoginText,
  LoginLink,
  LoginContainer,
  LoginLinkText,
} from "./styles";
import { Input } from "../../components/Input";
import { ButtonHome } from "../../components/Button";
import { BackButton } from "../../components/BackButton";
import { Alert } from "react-native";

type RegisterProps = {
  navigation: any;
};

export default function Register({ navigation }: RegisterProps) {
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    if (!email || !confirmEmail || !password || !confirmPassword) {
      Alert.alert("Erro", "Preencha todos os campos");
      return;
    }

    if (email !== confirmEmail) {
      Alert.alert("Erro", "Os e-mails não correspondem");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Erro", "As senhas não correspondem");
      return;
    }

    console.log("Registrando usuário", { email, password });
  };

  return (
    <SafeContainer>
      <BackButton />

      <HeaderImage source={require("../../assets/images/register.png")} />

      <Title>Crie sua Conta</Title>
      <Subtitle>Preencha com suas informações</Subtitle>

      <Input
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Input
        placeholder="Confirmar e-mail"
        value={confirmEmail}
        onChangeText={setConfirmEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Input
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Input
        placeholder="Confirmar senha"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      <ButtonContainer>
        <ButtonHome title="Criar conta" onPress={handleRegister} />
      </ButtonContainer>

      <LoginContainer>
        <LoginText>Já tem uma conta? </LoginText>
        <LoginLink onPress={() => navigation.navigate("Login")}>
          <LoginLinkText>Faça login.</LoginLinkText>
        </LoginLink>
      </LoginContainer>
    </SafeContainer>
  );
}
