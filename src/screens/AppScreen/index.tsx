import React, { useState } from "react";
import { FlatList, Alert } from "react-native";
import { Feather } from "@expo/vector-icons";
import {
  SafeContainer,
  HeaderContainer,
  GreetingText,
  SearchContainer,
  SearchInput,
  SearchIcon,
  EmptyListContainer,
  EmptyListText,
} from "./styles";
import ActivityCard from "../../components/ActivityCard";
import AddTaskButton from "../../components/AddTaskButton";
import ActivityModal from "../../components/ModalActivity";
import DeleteConfirmationModal from "../../components/ModalActivityRemove";

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
        <GreetingText>Olá, Gustavo!</GreetingText>
      </HeaderContainer>

      <SearchContainer>
        <SearchIcon name="search" size={20} />
        <SearchInput
          placeholder="Pesquisar listas"
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholderTextColor="#a69fca"
        />
        {searchQuery !== "" && (
          <Feather
            name="x"
            size={20}
            color="#8162DA"
            onPress={() => setSearchQuery("")}
            style={{ padding: 8 }}
          />
        )}
      </SearchContainer>

      <FlatList
        data={filteredActivities}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 100,
          flexGrow: 1,
          justifyContent: activities.length === 0 ? "center" : "flex-start",
        }}
        ListEmptyComponent={renderEmptyList}
      />

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
