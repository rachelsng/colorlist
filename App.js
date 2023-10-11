// Note: When debugging, make sure that the renderItem and return are in the HomeScreen Function

import { useState, useEffect } from "react";
import { View, StyleSheet, Text, Pressable, FlatList, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BlockRGB from "./components/BlockRGB";
import DetailsScreen from "./components/DetailsScreen.jsx";

function HomeScreen({ navigation }) {
  const [colorArray, setColorArray] = useState([
    { red: 255, green: 0, blue: 0, id: "0" },
    { red: 0, green: 255, blue: 0, id: "1" },
    { red: 0, green: 0, blue: 255, id: "2" },
  ]);

  function renderItem({ item }) {
    return (
      <Pressable
        onPress={() => {
          navigation.navigate("Details List", item);
        }}
      >
        <BlockRGB red={item.red} green={item.green} blue={item.blue} />
      </Pressable>
    );
  }

  function addColor() {
    setColorArray([
      ...colorArray,
      {
        red: Math.floor(Math.random() * 256),
        green: Math.floor(Math.random() * 256),
        blue: Math.floor(Math.random() * 256),
        id: colorArray.length,
      },
    ]);
  }
  function resetArray() {
    setColorArray([]);
  }

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button onPress={addColor} title = "Add colour" />
    });
  });

  return (
    <View style={styles.container}>
      {/* <Pressable
        style={{ height: 40, justifyContent: "center" }}
        onPress={addColor}
      >
        <Text style={{ color: "red" }}>Add Color</Text>
      </Pressable> */}
      <Pressable
        style={{ height: 40, justifyContent: "center" }}
        onPress={resetArray}
      >
        <Text style={{ color: "blue" }}>Reset</Text>
      </Pressable>
      <FlatList
        style={{ width: "100%" }}
        data={colorArray}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Colour List" component={HomeScreen} />
        <Stack.Screen name="Details List" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  list: {
    width: "100%",
  },
});
