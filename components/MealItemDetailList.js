import { FlatList, StyleSheet, Text, View } from "react-native";

const MealItemDetailList = ({ data, subTitle }) => {
  return (
    <>
      <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          scrollEnabled={false}
          data={data}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Text style={styles.listItem}>{`\u25CF ${item}`}</Text>
          )}
        />
      </View>
    </>
  );
};

export default MealItemDetailList;

const styles = StyleSheet.create({
  subTitleContainer: {
    padding: 6,
    borderBottomWidth: 2,
    borderBottomColor: "#3F4E4F",
    marginTop: 12,
    marginHorizontal: 24,
  },
  subTitle: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
  listContainer: {
    marginTop: 12,
    marginHorizontal: 24,
  },
  listItem: {
    fontSize: 16,
    marginVertical: 3,
    letterSpacing: 0.5,
  },
});
