import { StyleSheet, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealsOverviewList from "../components/MealsOverviewList";
// import { useLayoutEffect } from "react";

const MealsOverviewScreen = ({ route }) => {
  const { categoryId } = route.params;
  const filteredMeals = MEALS.filter((meals) =>
    meals.categoryIds.includes(categoryId)
  );

  // Another way of setting options for the screen
  // Here we use useLayoutEffect because if we use useEffect, then callback
  // fn will execute after the first render which will cause layout shift.
  // Using useLayoutEffect will make sure this fn executes simultaneously to
  // have a title in the first render itself.

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     title,
  //   });
  // }, [title, navigation]);

  return (
    <View style={styles.screen}>
      <MealsOverviewList data={filteredMeals} />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingBottom: 80,
  }
})