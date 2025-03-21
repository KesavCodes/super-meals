import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const IconButton = ({ name, color, size, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons name={name} size={size} color={color}/>
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  pressed: { opacity: 0.5 },
});
