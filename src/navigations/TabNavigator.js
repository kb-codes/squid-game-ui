import React from "react";
import { View, Image } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          backgroundColor: "rgba(255, 245, 245, 0.51)",
          borderColor: "white",
          borderWidth: 0.8,
          borderBottomWidth: 0.5,
          borderTopWidth: 2,
          borderRadius: 20,
          bottom: 30,
          marginHorizontal: 30,
          position: "absolute",
          elevation: 0,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <View
              style={{
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../assets/home.png")}
                style={{
                  width: 18,
                  height: 17,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={HomeScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <View
              style={{
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../assets/search.png")}
                style={{
                  width: 15,
                  height: 17,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Statics"
        component={HomeScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <View
              style={{
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../assets/games.png")}
                style={{
                  width: 24.27,
                  height: 17,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Store"
        component={HomeScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <View
              style={{
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../assets/account.png")}
                style={{
                  width: 14.78,
                  height: 19,
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
