import { FlatList, StyleSheet, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import MealItem from "./MealItem";

const MealsOverviewList = ({ data }) => {
  const navigation = useNavigation();

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
        data={data}
        keyExtractor={(meal) => meal.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverviewList;

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      padding: 16,
    },
  });
  