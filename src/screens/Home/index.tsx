import React from "react";
import {
  SafeContainer,
  HeaderImage,
  Title,
  Subtitle,
  ButtonContainer,
} from "./styles";
import { ButtonHome } from "../../components/Button";

type HomeProps = {
  navigation: any;
};

export default function Home({ navigation }: HomeProps) {
  return (
    <SafeContainer>
      <HeaderImage source={require("../../assets/images/home.png")} />

      <Title>Bem-vindo ao MyNotes</Title>
      <Subtitle>
        Organize suas ideias, tarefas e projetos de forma prática e intuitiva.
      </Subtitle>

      <ButtonContainer>
        <ButtonHome
          title="Começar Agora"
          onPress={() => navigation.navigate("Login")}
        />
      </ButtonContainer>
    </SafeContainer>
  );
}
