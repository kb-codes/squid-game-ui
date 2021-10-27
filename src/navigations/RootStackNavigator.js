import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Onboarding from "../screens/Onboarding";
import TabNavigator from "./TabNavigator";
const Stack = createNativeStackNavigator();

export default function RootStackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="OnBoarding"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="OnBoarding" component={Onboarding} />
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
