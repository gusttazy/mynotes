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
  InputContainer,
} from "./styles";
import { Input } from "../../components/Input";
import { ButtonHome } from "../../components/Button";
import { BackButton } from "../../components/BackButton";
import { Alert, Keyboard } from "react-native";
import { Feather } from "@expo/vector-icons";

type RegisterProps = {
  navigation: any;
};

export default function Register({ navigation }: RegisterProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePassword = (password: string) => {
    return password.length >= 6;
  };

  const handleRegister = () => {
    Keyboard.dismiss();

    if (!name || !email || !password) {
      Alert.alert("Erro", "Preencha todos os campos");
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert("Erro", "Digite um e-mail válido");
      return;
    }

    if (!validatePassword(password)) {
      Alert.alert("Erro", "A senha deve ter no mínimo 6 caracteres");
      return;
    }

    console.log("Registrando usuário", { name, email, password });
  };

  return (
    <SafeContainer>
      <BackButton />

      <HeaderImage source={require("../../assets/images/register.png")} />

      <Title>Crie sua Conta</Title>
      <Subtitle>Preencha com suas informações</Subtitle>

      <InputContainer>
        <Input
          placeholder="Nome completo"
          value={name}
          onChangeText={setName}
          autoCapitalize="words"
          left={<Feather name="user" size={20} color="#a69fca" />}
        />

        <Input
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          left={<Feather name="mail" size={20} color="#a69fca" />}
        />

        <Input
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          left={<Feather name="lock" size={20} color="#a69fca" />}
          right={
            <Feather
              name={showPassword ? "eye" : "eye-off"}
              size={20}
              color="#a69fca"
              onPress={() => setShowPassword(!showPassword)}
            />
          }
        />
      </InputContainer>

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
