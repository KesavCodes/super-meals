import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import MealShortDetails from "../components/MealShortDetails";
import MealItemDetailList from "../components/MealItemDetailList";
import IconButton from "../components/IconButton";

const MealDetailScreen = ({ route, navigation }) => {
  const { mealId, title } = route.params;
  const selectedMeal = MEALS.find((item) => item.id === mealId);

  const onFavClickHandler = () => console.log("Saved to Favorites!");
  useLayoutEffect(() => {
    navigation.setOptions({
      title,
      headerRight: () => (
        <IconButton
          name="heart"
          size={24}
          color="white"
          onPress={onFavClickHandler}
        />
      ),
    });
  }, [title, navigation]);

  return (
    <ScrollView bounces={false}>
      <View style={styles.mealDetailContainer}>
        <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealShortDetails
          duration={selectedMeal.duration}
          complexity={selectedMeal.complexity}
          affordability={selectedMeal.affordability}
        />
        <MealItemDetailList
          data={selectedMeal.ingredients}
          subTitle="Ingredients"
        />
        <MealItemDetailList data={selectedMeal.steps} subTitle="Steps" />
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 250,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    margin: 8,
  },
  mealDetailContainer: {
    paddingBottom: 100,
  },
});
