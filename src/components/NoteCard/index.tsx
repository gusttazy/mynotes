/**
 * Componente NoteCard
 * 
 * Este componente representa um card de anotação na lista principal.
 * Ele exibe o título da anotação e permite interações como:
 * - Clicar para ver detalhes
 * - Pressionar e segurar para deletar
 */
import React from "react";
import { NoteCardContainer, NoteText } from "./styles";

// Define as propriedades que o componente recebe
type NoteCardProps = {
  id: string;        // Identificador único da anotação
  title: string;     // Título da anotação
  content?: string;  // Conteúdo da anotação (opcional)
  onPress: (id: string, title: string, content?: string) => void;  // Função chamada ao clicar no card
  onLongPress: () => void;  // Função chamada ao pressionar e segurar o card
};

const NoteCard = ({ id, title, content, onPress, onLongPress }: NoteCardProps) => {
  return (
    <NoteCardContainer 
      onPress={() => onPress(id, title, content)} 
      onLongPress={onLongPress}
    >
      <NoteText>{title}</NoteText>
    </NoteCardContainer>
  );
};

export default NoteCard;
