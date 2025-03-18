import { FlatList, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
// import { useLayoutEffect } from "react";

const MealsOverviewScreen = ({ route, navigation }) => {
  const { categoryId, title } = route.params;
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

  const renderMealItem = ({ item }) => {
    const pressHandler = () =>
      navigation.navigate("MealDetail", { mealId: item.id, title: item.title });
    const mealItemProps = {
      title: item.title,
      imgUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
      onPress: pressHandler,
    };
    return <MealItem {...mealItemProps} />;
  };
  return (
    <View style={styles.screen}>
      <FlatList
        data={filteredMeals}
        keyExtractor={(meal) => meal.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
    paddingBottom: 100,
  },
});
