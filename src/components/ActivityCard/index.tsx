import React from "react";
import { TouchableOpacity } from "react-native";
import { ActivityCardContainer, ActivityText } from "./styles";

type ActivityCardProps = {
  title: string;
  onPress: () => void;
  onLongPress: () => void;
};

const ActivityCard = ({ title, onPress, onLongPress }: ActivityCardProps) => {
  return (
    <ActivityCardContainer onPress={onPress} onLongPress={onLongPress}>
      <ActivityText>{title}</ActivityText>
    </ActivityCardContainer>
  );
};

export default ActivityCard;