import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

export default function DetailsScreen({ route }) {
  const { red, green, blue } = route.params;
  // return <Text>Details screen</Text>;
  // We keep the styling inline; feel free to move it out
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: `rgb(${red}, ${green}, ${blue})` },
      ]}
    >
      <View style={{ padding: 30 }}>
        <Text style={{ fontSize: 20, padding: 10 }}>Red: {red}</Text>
        <Text style={{ fontSize: 20, padding: 10 }}>Green: {green}</Text>
        <Text style={{ fontSize: 20, padding: 10 }}>Blue: {blue}</Text>
      </View>
    </View>
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