import React, { useState } from "react";
import { FlatList, Alert } from "react-native";
import { Feather } from "@expo/vector-icons";
import {
  SafeContainer,
  HeaderContainer,
  HeaderContent,
  GreetingText,
  SearchContainer,
  EmptyListContainer,
  EmptyListText,
  LogoutButton,
  ContentContainer,
} from "./styles";
import ActivityCard from "../../components/ActivityCard";
import AddTaskButton from "../../components/AddTaskButton";
import ActivityModal from "../../components/ModalActivity";
import DeleteConfirmationModal from "../../components/ModalActivityRemove";
import { Input } from "../../components/Input";
import { supabase } from "../../config/supabase";
import theme from "../../styles/theme";

type AppScreenProps = {
  navigation: any;
};

type Activity = {
  id: string;
  title: string;
  content?: string;
};

export default function Home({ navigation }: AppScreenProps) {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [activityToDelete, setActivityToDelete] = useState<string | null>(null);

  const filteredActivities = searchQuery
    ? activities.filter((activity) =>
        activity.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : activities;

  const handleAddActivity = () => {
    setModalVisible(true);
  };

  const handleSaveActivity = (title: string) => {
    if (title.trim() === "") {
      Alert.alert("Erro", "O nome da atividade não pode estar vazio.");
      return;
    }

    const newActivity = {
      id: Date.now().toString(),
      title: title.trim(),
    };

    setActivities([...activities, newActivity]);
    setModalVisible(false);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleActivityPress = (id: string) => {
    const activity = activities.find(act => act.id === id);
    if (activity) {
      navigation.navigate("ActivityDetails", { 
        activityId: id,
        title: activity.title,
        content: activity.content || ""
      });
    }
  };

  const handleRemoveActivity = (id: string) => {
    setActivityToDelete(id);
    setDeleteModalVisible(true);
  };

  const confirmRemoveActivity = () => {
    if (activityToDelete) {
      setActivities(
        activities.filter((activity) => activity.id !== activityToDelete)
      );
    }
    setDeleteModalVisible(false);
    setActivityToDelete(null);
  };

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
    } catch (error) {
      Alert.alert("Erro", "Não foi possível fazer logout. Tente novamente.");
    }
  };

  const renderItem = ({ item }: { item: Activity }) => (
    <ActivityCard
      title={item.title}
      onPress={() => handleActivityPress(item.id)}
      onLongPress={() => handleRemoveActivity(item.id)}
    />
  );

  const renderEmptyList = () => (
    <EmptyListContainer>
      <EmptyListText>Nenhuma atividade encontrada</EmptyListText>
      <EmptyListText>Clique no botão + para adicionar</EmptyListText>
    </EmptyListContainer>
  );

  return (
    <SafeContainer>
      <HeaderContainer>
        <HeaderContent>
          <GreetingText>Minhas Atividades</GreetingText>
          <LogoutButton onPress={handleLogout}>
            <Feather name="log-out" size={24} color={theme.colors.white} />
          </LogoutButton>
        </HeaderContent>

        <SearchContainer>
          <Input
            placeholder="Pesquisar listas"
            value={searchQuery}
            onChangeText={setSearchQuery}
            left={<Feather name="search" size={20} color={theme.colors.roxoSecundario} />}
            right={
              searchQuery !== "" ? (
                <Feather
                  name="x"
                  size={20}
                  color={theme.colors.roxoSecundario}
                  onPress={() => setSearchQuery("")}
                />
              ) : undefined
            }
          />
        </SearchContainer>
      </HeaderContainer>

      <ContentContainer>
        <FlatList
          data={filteredActivities}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={renderEmptyList}
          showsVerticalScrollIndicator={false}
        />
      </ContentContainer>

      <AddTaskButton onPress={handleAddActivity} />
      <ActivityModal
        visible={modalVisible}
        onClose={handleCloseModal}
        onSave={handleSaveActivity}
      />
      <DeleteConfirmationModal
        visible={deleteModalVisible}
        onClose={() => setDeleteModalVisible(false)}
        onConfirm={confirmRemoveActivity}
      />
    </SafeContainer>
  );
}
