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

      <Title>Bem-vindo ao Checklist+</Title>
      <Subtitle>
        Gerencie suas tarefas de maneira personalizada, organizada e eficiente.
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
