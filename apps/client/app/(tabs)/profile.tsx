import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "@/components/Button";
import { StatusBar } from "expo-status-bar";

const profileImage = require("@/assets/images/profile.png");
const profile = () => {
  const [showNameInput, setShowNameInput] = React.useState<boolean>(false);
  const [showPassInput, setShowPassInput] = React.useState<boolean>(false);
  const [username, setUsername] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  return (
    <SafeAreaView className="h-full bg-[#438f78]">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="mt-10 px-3 h-full">
          <Image
            source={profileImage}
            resizeMode="contain"
            className="w-full h-60 rounded-full mt-5 border border-dark_grey"
          />
          <Text className="text-xl font-spaceMono text-white text-center">
            Kennedy
          </Text>
          <View className="mt-7">
            <Text className="text-white text-lg font-spaceMono">
              Personal Information
            </Text>
            <View className="flex-row justify-between gap-2 mt-4">
              <Text className="text-white font-spaceMono text-lg rounded-md border border-dark_green pl-2  flex-1">
                Kennedy
              </Text>
              <TouchableOpacity
                onPress={() => setShowNameInput(!showNameInput)}
                className={`bg-dark_green w-1/4 py-2 rounded-lg mt-6 `}
              >
                <Text className={`text-white text-center font-workSansItalic`}>
                  Update
                </Text>
              </TouchableOpacity>
            </View>
            <View className="flex-row justify-between">
              <Text className="text-white font-spaceMono text-lg rounded-md mt-3 mr-2 border border-dark_green pl-2 flex-1">
                *****
              </Text>
              <TouchableOpacity
                onPress={() => setShowPassInput(!showPassInput)}
                className={`bg-dark_green w-1/4 py-2 rounded-lg mt-6 `}
              >
                <Text className={`text-white text-center font-workSansItalic`}>
                  Update
                </Text>
              </TouchableOpacity>
            </View>
            {showNameInput && (
              <View className="border border-dark_green p-1 mt-5">
                <TextInput
                  value={username}
                  placeholder="username"
                  placeholderTextColor="white"
                  className="font-spaceMono border border-dark_green p-4 mt-5 rounded-xl"
                  onChangeText={setUsername}
                />
                <TouchableOpacity
                  onPress={() => {}}
                  className={`bg-dark_green w-1/4 py-2 rounded-lg mt-6`}
                >
                  <Text
                    className={`text-white text-center font-workSansItalic`}
                  >
                    submit
                  </Text>
                </TouchableOpacity>
              </View>
            )}
            {showPassInput && (
              <View className="border border-dark_green p-1 mt-5">
                <TextInput
                  value={password}
                  placeholder="password"
                  placeholderTextColor="white"
                  className="font-spaceMono border border-dark_green p-4 mt-5 rounded-xl"
                  onChangeText={setPassword}
                />
                <TouchableOpacity
                  onPress={() => {}}
                  className={`bg-dark_green w-1/4 py-2 rounded-lg mt-6 `}
                >
                  <Text
                    className={`text-white text-center font-workSansItalic`}
                  >
                    submit
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
      <StatusBar style="dark" backgroundColor="#438f78" />
    </SafeAreaView>
  );
};

export default profile;
