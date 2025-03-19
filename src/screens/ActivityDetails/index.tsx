import React, { useState, useEffect } from "react";
import { Platform, KeyboardAvoidingView, ScrollView } from "react-native";
import {
  SafeContainer,
  HeaderContainer,
  HeaderTitleInput,
  ContentContainer,
  ContentInput,
} from "./styles";
import FloatingActionButton from "../../components/TaskManagerButton";
import { BackButton } from "../../components/BackButton";

type NoteDetailsScreenProps = {
  route: {
    params: {
      activityId?: string;
      title?: string;
      content?: string;
    };
  };
  navigation: any;
};

export default function ActivityDetails({
  route,
  navigation,
}: NoteDetailsScreenProps) {
  const { activityId, title: initialTitle, content: initialContent } = route.params || {};
  const [title, setTitle] = useState(initialTitle || "Atividade 01");
  const [noteContent, setNoteContent] = useState(initialContent || "");

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

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
      <HeaderContainer>
        <BackButton
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

      <FloatingActionButton onSave={handleSaveNote} />
    </SafeContainer>
  );
}
