import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const SecondStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Second Stack"
        component={() => (
          <View>
            <Text>Hello, I am your second stack</Text>
          </View>
        )}
      />
    </Stack.Navigator>
  );
};

export default SecondStack;
