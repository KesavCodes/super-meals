import { StyleSheet, Text, View } from "react-native";

const MealShortDetails = ({ duration, complexity, affordability }) => {
  return (
    <View style={styles.itemDetailsContainer}>
      <Text style={styles.itemDetails}>{duration}m</Text>
      <Text style={styles.itemDetails}>{complexity?.toUpperCase()}</Text>
      <Text style={styles.itemDetails}>{affordability?.toUpperCase()}</Text>
    </View>
  );
};

export default MealShortDetails;

const styles = StyleSheet.create({
  itemDetailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  itemDetails: {
    fontSize: 12,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "black",
    borderRadius: 4,
    marginHorizontal: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
});
