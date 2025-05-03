/**
 * Componente NoteButtonAdd
 * 
 * Este componente é um botão flutuante que permite ao usuário
 * adicionar uma nova anotação. Ele aparece fixo no canto inferior
 * direito da tela principal.
 */
import React from "react";
import { NoteButtonContainer, NoteButtonIcon } from "./styles";

// Define as propriedades que o botão recebe
type NoteButtonAddProps = {
  onPress: () => void;  // Função chamada quando o botão é pressionado
};

const NoteButtonAdd = ({ onPress }: NoteButtonAddProps) => {
  return (
    <NoteButtonContainer onPress={onPress}>
      <NoteButtonIcon name="plus" size={30} />
    </NoteButtonContainer>
  );
};

export default NoteButtonAdd;
