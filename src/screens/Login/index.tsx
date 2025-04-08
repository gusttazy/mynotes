import React, { useState } from "react";
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
  InputContainer,
  ScrollContainer,
  ContentContainer,
} from "./styles";
import { Input } from "../../components/Input";
import { ButtonHome } from "../../components/Button";
import { BackButton } from "../../components/BackButton";
import { Feather } from "@expo/vector-icons";
import { Keyboard, KeyboardAvoidingView, Platform, Alert } from "react-native";
import { supabase } from "../../config/supabase";

type LoginProps = {
  navigation: any;
};

export default function Login({ navigation }: LoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    Keyboard.dismiss();
    setLoading(true);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      navigation.navigate("AppScreen");
    } catch (error) {
      Alert.alert("Erro", "Email ou senha inválidos");
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
            <BackButton />

            <HeaderImage source={require("../../assets/images/login.png")} />

            <Title>Entre na sua conta</Title>
            <Subtitle>Preencha com suas informações</Subtitle>

            <InputContainer>
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
              <ButtonHome 
                title={loading ? "Carregando..." : "Fazer Login"} 
                onPress={handleLogin}
                disabled={loading}
              />
            </ButtonContainer>

            <RegisterContainer>
              <RegisterText>Não tem cadastro? </RegisterText>
              <RegisterLink onPress={() => navigation.navigate("Register")}>
                <RegisterLinkText>Faça uma conta.</RegisterLinkText>
              </RegisterLink>
            </RegisterContainer>
          </ContentContainer>
        </ScrollContainer>
      </KeyboardAvoidingView>
    </SafeContainer>
  );
}
