/**
 * Tela principal do aplicativo de anotações
 *
 * Esta tela exibe a lista de anotações do usuário e permite:
 * - Visualizar todas as anotações
 * - Adicionar novas anotações
 * - Pesquisar anotações existentes
 * - Editar anotações (ao clicar nelas)
 * - Deletar anotações (com pressão longa)
 * - Fazer logout da conta
 */
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
import ActivityCard from "../../components/NoteCard";
import AddTaskButton from "../../components/NoteButtonAdd";
import ActivityModal from "../../components/NoteAddModal";
import DeleteConfirmationModal from "../../components/NoteRemoveModal";
import { Input } from "../../components/Input";
import { supabase } from "../../config/supabase";
import theme from "../../styles/theme";

// Define as propriedades de navegação que a tela recebe
type AppScreenProps = {
  navigation: any;
};

// Define a estrutura de uma anotação no aplicativo
type Activity = {
  id: string; // Identificador único da anotação
  title: string; // Título da anotação
  content?: string; // Conteúdo da anotação (opcional)
};

export default function Home({ navigation }: AppScreenProps) {
  // Estados que controlam o funcionamento da tela
  const [activities, setActivities] = useState<Activity[]>([]); // Lista de todas as anotações
  const [searchQuery, setSearchQuery] = useState(""); // Texto digitado na busca
  const [modalVisible, setModalVisible] = useState(false); // Controla se o modal de adicionar está visível
  const [deleteModalVisible, setDeleteModalVisible] = useState(false); // Controla se o modal de deletar está visível
  const [activityToDelete, setActivityToDelete] = useState<string | null>(null); // Guarda o ID da anotação que será deletada

  // Filtra as anotações baseado no texto de busca
  const filteredActivities = searchQuery
    ? activities.filter((activity) =>
        activity.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : activities;

  // Função que abre o modal para adicionar uma nova anotação
  const handleAddActivity = () => {
    setModalVisible(true);
  };

  // Função que salva uma nova anotação
  const handleSaveActivity = (title: string) => {
    // Verifica se o título não está vazio
    if (title.trim() === "") {
      Alert.alert("Erro", "O nome da atividade não pode estar vazio.");
      return;
    }

    // Cria uma nova anotação com ID único baseado no timestamp atual
    const newActivity = {
      id: Date.now().toString(),
      title: title.trim(),
    };

    // Adiciona a nova anotação à lista e fecha o modal
    setActivities([...activities, newActivity]);
    setModalVisible(false);
  };

  // Fecha o modal de adicionar anotação
  const handleCloseModal = () => {
    setModalVisible(false);
  };

  // Navega para a tela de detalhes da anotação quando ela é clicada
  const handleActivityPress = (id: string) => {
    const activity = activities.find((act) => act.id === id);
    if (activity) {
      navigation.navigate("NoteDetails", {
        activityId: id,
        title: activity.title,
        content: activity.content || "",
      });
    }
  };

  // Prepara a remoção de uma anotação (abre o modal de confirmação)
  const handleRemoveActivity = (id: string) => {
    setActivityToDelete(id);
    setDeleteModalVisible(true);
  };

  // Remove efetivamente a anotação após confirmação
  const confirmRemoveActivity = () => {
    if (activityToDelete) {
      setActivities(
        activities.filter((activity) => activity.id !== activityToDelete)
      );
    }
    setDeleteModalVisible(false);
    setActivityToDelete(null);
  };

  // Realiza o logout do usuário
  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
    } catch (error) {
      Alert.alert("Erro", "Não foi possível fazer logout. Tente novamente.");
    }
  };

  // Renderiza cada item da lista de anotações
  const renderItem = ({ item }: { item: Activity }) => (
    <ActivityCard
      id={item.id}
      title={item.title}
      content={item.content}
      onPress={() => handleActivityPress(item.id)}
      onLongPress={() => handleRemoveActivity(item.id)}
    />
  );

  // Renderiza a mensagem quando não há anotações
  const renderEmptyList = () => (
    <EmptyListContainer>
      <EmptyListText>Nenhuma atividade encontrada</EmptyListText>
      <EmptyListText>Clique no botão + para adicionar</EmptyListText>
    </EmptyListContainer>
  );

  return (
    <SafeContainer>
      {/* Cabeçalho da tela com título e botão de logout */}
      <HeaderContainer>
        <HeaderContent>
          <GreetingText>Minhas Atividades</GreetingText>
          <LogoutButton onPress={handleLogout}>
            <Feather name="log-out" size={24} color={theme.colors.white} />
          </LogoutButton>
        </HeaderContent>

        {/* Barra de pesquisa de anotações */}
        <SearchContainer>
          <Input
            placeholder="Pesquisar listas"
            value={searchQuery}
            onChangeText={setSearchQuery}
            left={
              <Feather
                name="search"
                size={20}
                color={theme.colors.roxoSecundario}
              />
            }
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

      {/* Lista de anotações */}
      <ContentContainer>
        <FlatList
          data={filteredActivities}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={renderEmptyList}
          showsVerticalScrollIndicator={false}
        />
      </ContentContainer>

      {/* Botão flutuante para adicionar nova anotação */}
      <AddTaskButton onPress={handleAddActivity} />

      {/* Modal para adicionar nova anotação */}
      <ActivityModal
        visible={modalVisible}
        onClose={handleCloseModal}
        onSave={handleSaveActivity}
      />

      {/* Modal de confirmação para deletar anotação */}
      <DeleteConfirmationModal
        visible={deleteModalVisible}
        onClose={() => setDeleteModalVisible(false)}
        onConfirm={confirmRemoveActivity}
      />
    </SafeContainer>
  );
}
