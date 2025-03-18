import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import MealShortDetails from "./MealShortDetails";
const MealItem = ({
  title,
  imgUrl,
  affordability,
  complexity,
  duration,
  onPress,
}) => {
  return (
    <View style={styles.mealItemContainer}>
      <Pressable android_ripple={{ color: "#ccc" }} onPress={onPress}>
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imgUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealShortDetails
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItemContainer: {
    marginBottom: 24,
    marginHorizontal: 16,
    borderRadius: 8,
    backgroundColor: "white",
    overflow: "hidden",
    elevation: 6,
  },
  innerContainer: {
    paddingBottom: 12,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    margin: 8,
  },
});
