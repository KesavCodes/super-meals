import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoritesScreen from "./screens/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const screenOptionsObj = {
  headerTintColor: "white",
  headerStyle: { backgroundColor: "#3F4E4F" },
  contentStyle: { backgroundColor: "#FEFCF3" },
};

const DrawerNavigator = () => (
  <Drawer.Navigator
    screenOptions={{
      ...screenOptionsObj,
      sceneStyle: { backgroundColor: "#FEFCF3" },
      drawerContentStyle: { backgroundColor: "#FEFCF3" },
      drawerActiveBackgroundColor: "#3F4E4F",
      drawerActiveTintColor: "white",
      drawerLabelStyle: {
        fontSize: 16,
      },
    }}
  >
    <Drawer.Screen
      name="MealsCategories"
      component={CategoriesScreen}
      options={{
        title: "All Categories",
        drawerIcon: ({color, size}) => (
          <Ionicons name="fast-food" color={color} size={size} />
        ),
      }}
    />
    <Drawer.Screen name="Favorites" component={FavoritesScreen} 
    options={{
      drawerIcon: ({color, size}) => (
        <Ionicons name="heart" color={color} size={size} />
      ),
    }}
    />
  </Drawer.Navigator>
);

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={screenOptionsObj}>
          <Stack.Screen
            name="HomeDrawer"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            options={({ route }) => {
              const { title } = route.params;
              return {
                title: `${title} Dishes`,
              };
            }}
          />
          <Stack.Screen name="MealDetail" component={MealDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
