import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from '../screens/RootStack/HomeScreen';
import FirstStack from './FirstStack'
import SecondStack from './SecondStack'

const Stack = createStackNavigator();

const RookStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root Stack"
        component={HomeScreen}
      />
      <Stack.Screen
        name="First Stack"
        component={FirstStack}
      />
      <Stack.Screen
        name="Second Stack"
        component={SecondStack}
      />
    </Stack.Navigator>
  );
};

export default RookStack;
