import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Welcome from "@/screens/Welcome";
import Mood from "@/screens/Mood";
import Category from "@/screens/Category";
import Create from "@/screens/Create";

const home = () => {
  const [screen, setScreen] = React.useState<number>(1);

  const renderScreen = () => {
    switch (screen) {
      case 1:
        return <Welcome onNavigate={setScreen} />;
      case 2:
        return <Mood onNavigate={setScreen} />;
      case 3:
        return <Category onNavigate={setScreen} />;
      case 4:
        return <Create onNavigate={setScreen} />;
      default:
        return <Welcome onNavigate={setScreen} />;
    }
  };
  return (
    <SafeAreaView className="h-full bg-[#438f78]">
      <ScrollView>{renderScreen()}</ScrollView>
      <StatusBar style="dark" backgroundColor="#438f78" />
    </SafeAreaView>
  );
};

export default home;
