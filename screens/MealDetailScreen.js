import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import { useContext, useLayoutEffect } from "react";
import MealShortDetails from "../components/MealShortDetails";
import MealItemDetailList from "../components/MealItemDetailList";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "./../store/context/favoritesContext";

const MealDetailScreen = ({ route, navigation }) => {
  const { mealId, title } = route.params;
  const selectedMeal = MEALS.find((item) => item.id === mealId);
  const {
    ids: favMealIds,
    addToFavorite,
    removeFromFavorite,
  } = useContext(FavoritesContext);
  const isFavoriteMeal = favMealIds.includes(selectedMeal.id);
  const onFavClickHandler = () =>
    isFavoriteMeal ? removeFromFavorite(mealId) : addToFavorite(mealId);

  useLayoutEffect(() => {
    navigation.setOptions({
      title,
      headerRight: () => (
        <IconButton
          name= {isFavoriteMeal ? "heart" : "heart-outline"} 
          size={24}
          color={isFavoriteMeal ? "#e14343" : "white"}
          onPress={onFavClickHandler}
        />
      ),
    });
  }, [title, isFavoriteMeal, navigation]);

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
