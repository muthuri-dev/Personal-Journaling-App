import {
  Alert,
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
import { useAuthStore } from "@/store/useAuthStore";
import { useMutation } from "@apollo/client";
import { UPDATE_PASSWORD } from "@/graphql/profile.actions";

const profileImage = require("@/assets/images/profile.png");
const profile = () => {
  const [showPassInput, setShowPassInput] = React.useState<boolean>(false);
  const [password, setPassword] = React.useState<string>("");

  //getting username from the dtore
  const { username } = useAuthStore();

  //graphql actions
  const [updatePassword, { loading }] = useMutation(UPDATE_PASSWORD, {
    onCompleted: () => {
      Alert.alert("Password Updated");
    },
    onError: (error) => {
      Alert.alert("Failed to update password", error.message);
    },
  });

  //submiting data
  const submit = () => {
    if (!password) {
      Alert.alert("Enter password to update");
    }
    updatePassword({
      variables: {
        password,
        username,
      },
    });
  };
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
            {username}
          </Text>
          <View className="mt-7">
            <Text className="text-white text-lg font-spaceMono underline">
              Personal Information
            </Text>
            <View className="flex-row justify-between gap-2 mt-4">
              <Text className="text-white font-spaceMono text-xl rounded-md border border-dark_green p-4  flex-1">
                {username}
              </Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="text-white font-spaceMono text-lg rounded-md mt-3 mr-2 border border-dark_green pl-2 flex-1">
                Update password
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
                  onPress={submit}
                  className="bg-dark_green w-1/4 py-2 rounded-lg mt-6 "
                >
                  {loading ? (
                    <Text className="text-white text-center font-workSansItalic">
                      Submit ...
                    </Text>
                  ) : (
                    <Text className="text-white text-center font-workSansItalic">
                      Submit
                    </Text>
                  )}
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
