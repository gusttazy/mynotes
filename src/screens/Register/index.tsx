import React, { useState } from "react";
import {
  SafeContainer,
  HeaderImage,
  Title,
  ButtonContainer,
  LoginText,
  LoginLink,
  LoginContainer,
  LoginLinkText,
  InputContainer,
  ScrollContainer,
  ContentContainer,
} from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ArrowBack } from "../../components/ArrowBack";
import { Alert, Keyboard, KeyboardAvoidingView, Platform } from "react-native";
import { Feather } from "@expo/vector-icons";
import { supabase } from "../../config/supabase";

type RegisterProps = {
  navigation: any;
};

export default function Register({ navigation }: RegisterProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePassword = (password: string) => {
    return password.length >= 6;
  };

  const handleRegister = async () => {
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

    setLoading(true);

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name,
          },
        },
      });

      if (error) throw error;

      navigation.navigate("Login");
    } catch (error) {
      Alert.alert("Erro", "Não foi possível criar a conta. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeContainer>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollContainer
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <ContentContainer>
            <ArrowBack />

            <HeaderImage source={require("../../images/register.png")} />

            <Title>Criar conta</Title>

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
              <Button 
                title={loading ? "Carregando..." : "Criar Conta"} 
                onPress={handleRegister}
                disabled={loading}
              />
            </ButtonContainer>

            <LoginContainer>
              <LoginText>Já tem uma conta? </LoginText>
              <LoginLink onPress={() => navigation.navigate("Login")}>
                <LoginLinkText>Faça login.</LoginLinkText>
              </LoginLink>
            </LoginContainer>
          </ContentContainer>
        </ScrollContainer>
      </KeyboardAvoidingView>
    </SafeContainer>
  );
}
