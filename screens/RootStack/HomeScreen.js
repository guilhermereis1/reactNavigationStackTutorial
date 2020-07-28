import React from "react";
import { View, Text, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  const goToFirstStack = (navigation) => {
    navigation.navigate("First Stack");
  };

  const goToSecondStack = (navigation) => {
    navigation.navigate("Second Stack");
  };

  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        onPress={() => goToFirstStack(navigation)}
        title="Go to First Stack"
      />
      <Button
        onPress={() => goToSecondStack(navigation)}
        title="Go to Second Stack"
      />
    </View>
  );
};

export default HomeScreen;
