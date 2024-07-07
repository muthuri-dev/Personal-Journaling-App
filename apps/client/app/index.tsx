import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const journal = require("@/assets/images/journal.png");

export default function App() {
  return (
    <SafeAreaView className="h-full bg-[#438f78]">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full mt-10 items-center h-screen px-4">
          <Image
            source={journal}
            resizeMode="contain"
            className="h-60 w-full"
          />
          <Text className="font-spaceMono text-white mt-10 text-center text-xl">
            The ultimate companion for your personal growth and self-reflection
            journey.Capture your <Text className="text-pink">thoughts</Text> and{" "}
            <Text className="text-pink">moments</Text>.
          </Text>
          <Text className="font-playwrite text-dark_green text-lg text-center mt-3">
            Let's embark on this journey together and make every day a step
            towards a more mindful and fulfilled you!
          </Text>

          <TouchableOpacity
            onPress={() => router.push("/register")}
            className="bg-dark_green w-full rounded-lg mt-16"
          >
            <Text className="text-white  my-4 text-center font-latpBolditalick">
              Start journey
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <StatusBar style="dark" backgroundColor="#438f78" />
    </SafeAreaView>
  );
}
