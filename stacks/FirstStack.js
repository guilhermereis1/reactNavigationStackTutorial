import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const FirstStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="First Stack"
        component={() => (
          <View>
            <Text>Hello, I am your first stack</Text>
          </View>
        )}
      />
    </Stack.Navigator>
  );
};

export default FirstStack;
