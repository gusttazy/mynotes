/**
 * Tela NoteDetails
 * 
 * Esta tela exibe e permite editar os detalhes de uma anotação específica.
 * Funcionalidades:
 * - Exibe o título da anotação
 * - Permite editar o título
 * - Exibe e permite editar o conteúdo da anotação
 * - Salva automaticamente as alterações ao voltar
 */
import React, { useState, useEffect } from "react";
import { Platform, KeyboardAvoidingView, ScrollView } from "react-native";
import {
  SafeContainer,
  HeaderContainer,
  HeaderTitleInput,
  ContentContainer,
  ContentInput,
} from "./styles";
import { ArrowBack } from "../../components/ArrowBack";

// Define as propriedades de navegação e rota que a tela recebe
type NoteDetailsScreenProps = {
  route: {
    params: {
      activityId?: string;  // ID da anotação
      title?: string;       // Título da anotação
      content?: string;     // Conteúdo da anotação
    };
  };
  navigation: any;
};

export default function NoteDetails({
  route,
  navigation,
}: NoteDetailsScreenProps) {
  // Extrai os parâmetros da rota com valores padrão
  const {
    activityId,
    title: initialTitle,
    content: initialContent,
  } = route.params || {};

  // Estados para controlar o título e conteúdo da anotação
  const [title, setTitle] = useState(initialTitle || "Atividade 01");
  const [noteContent, setNoteContent] = useState(initialContent || "");

  // Configura o cabeçalho da tela para não ser exibido
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  // Função que salva as alterações e volta para a tela anterior
  const handleSaveNote = () => {
    navigation.navigate("AppScreen", {
      updatedActivity: {
        id: activityId,
        title,
        content: noteContent,
      },
    });
  };

  return (
    <SafeContainer>
      {/* Cabeçalho da tela com botão de voltar e campo de título */}
      <HeaderContainer>
        <ArrowBack
          color="#fff"
          style={{ position: "absolute", top: 40, left: 10 }}
        />
        <HeaderTitleInput
          value={title}
          onChangeText={setTitle}
          placeholder="Título da nota"
          placeholderTextColor="#f2f2f2"
          multiline
        />
      </HeaderContainer>

      {/* Área de conteúdo da anotação */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <ContentContainer>
            <ContentInput
              value={noteContent}
              onChangeText={setNoteContent}
              placeholder="Adicione texto à sua nota..."
              placeholderTextColor="#a69fca"
              multiline
              textAlignVertical="top"
            />
          </ContentContainer>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeContainer>
  );
}
