import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";
import FormField from "@/components/FormField";
import Button from "@/components/Button";

const loginImage = require("@/assets/images/login.png");

const login = () => {
  const [form, setForm] = React.useState({
    password: "",
    username: "",
  });

  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const submit = async () => {
    if (!form.password || !form.username) {
      Alert.alert("Error", "Pleas fill in all the fields");
    }
    setIsLoading(!isLoading);
    try {
      //  router.replace("/home");
    } catch (error: any) {
      Alert.alert("Error", error);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <SafeAreaView className="bg-[#438f78] h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full h-full justify-center px-4">
          <Image
            source={loginImage}
            resizeMode="contain"
            className="w-full h-60"
          />
          <Text className="text-2xl text-white font-spaceMono text-center mt-10">
            Login
          </Text>
          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(event) => setForm({ ...form, username: event })}
            otherStyles="mt-7"
            placehoder="username"
            placehoderTextColor="white"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(event) => setForm({ ...form, password: event })}
            otherStyles="mt-7"
            keyboardType="password"
            placehoder="password"
            placehoderTextColor="white"
          />
          <Button title="Login" isLoading={isLoading} handlePress={submit} />
          <Link href="/home">Home</Link>
          <View className="justify-center flex-row pt-5 gap-2">
            <Text className="text-lg text-gray-100 font-spaceMono">
              Dont have account already?
            </Text>
            <Link href="/register" className="text-lg text-dark_green">
              register
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default login;
