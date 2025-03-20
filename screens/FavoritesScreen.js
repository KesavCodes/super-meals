import { useContext } from "react";
import MealsOverviewList from "./../components/MealsOverviewList";
import { FavoritesContext } from "./../store/context/favoritesContext";
import { MEALS } from "../data/dummy-data";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

const NoFavorite = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>No Favorites Here!</Text>
      <Text style={styles.desc}>
        You haven't favorited any meals yet. Take a look at the meals and click
        on the heart to save them.
      </Text>
    </View>
  );
};
const FavoritesScreen = () => {
  // const { ids: favIds } = useContext(FavoritesContext);
  const favIds = useSelector((state) => state.favoriteMeals.ids);
  const favMeals = MEALS.filter((meal) => favIds.includes(meal.id));
  return favMeals.length ? (
    <MealsOverviewList data={favMeals} />
  ) : (
    <NoFavorite />
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    margin: 24,
    letterSpacing: 0.6,
  },
  desc: {
    fontSize: 16,
    textAlign: "center",
    letterSpacing: 1.1,
    marginHorizontal: 48,
  },
});
