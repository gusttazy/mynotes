import React from "react";
import {
  SafeContainer,
  HeaderImage,
  Title,
  Subtitle,
  ButtonContainer,
} from "./styles";
import { Button } from "../../components/Button";

type WelcomeProps = {
  navigation: any;
};

export default function Welcome({ navigation }: WelcomeProps) {
  return (
    <SafeContainer>
      <HeaderImage source={require("../../images/welcome.png")} />

      <Title>Bem-vindo ao MyNotes</Title>
      <Subtitle>
        Organize suas ideias, tarefas e projetos de forma prática e intuitiva.
      </Subtitle>

      <ButtonContainer>
        <Button
          title="Começar Agora"
          onPress={() => navigation.navigate("Login")}
        />
      </ButtonContainer>
    </SafeContainer>
  );
}
