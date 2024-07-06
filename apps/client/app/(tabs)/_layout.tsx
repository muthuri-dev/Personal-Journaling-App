import { Tabs } from "expo-router";
import React from "react";
import { Text } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#143029",
        tabBarInactiveTintColor: "white",
        headerShown: false,
        tabBarShowLabel: true,
        headerTitleStyle: { fontFamily: "spaceMono" },
        tabBarStyle: {
          backgroundColor: "#438f78",
          borderTopWidth: 1,
          borderTopColor: "#143029",
          paddingBottom: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          elevation: 2,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarLabel: ({ focused, color }) => (
            <Text style={{ fontFamily: "spaceMono", color }}>
              {focused ? "Home" : "Home"}
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="moments"
        options={{
          title: "Moments",
          tabBarLabel: ({ focused, color }) => (
            <Text style={{ fontFamily: "spaceMono", color }}>
              {focused ? "Moments" : "Moments"}
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarLabel: ({ focused, color }) => (
            <Text style={{ fontFamily: "spaceMono", color }}>
              {focused ? "Profile" : "Profile"}
            </Text>
          ),
        }}
      />
    </Tabs>
  );
}
