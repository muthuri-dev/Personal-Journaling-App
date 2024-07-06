import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { Link, router } from "expo-router";
import FormField from "@/components/FormField";
import Button from "@/components/Button";

const loginImage = require("@/assets/images/login.png");

const register = () => {
  const [form, setForm] = React.useState({ username: "", password: "" });

  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const submit = async () => {
    if (!form.username || !form.password) {
      Alert.alert("Error", "Pleas fill in all the fields");
    }
    setIsLoading(!isLoading);
    try {
      //await signIn(form.email, form.password);
      router.replace("/home");
    } catch (error: any) {
      Alert.alert("Error", error.message);
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
            Create Account with us
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
          <Button
            title="Create Account"
            isLoading={isLoading}
            handlePress={submit}
          />
          <TouchableOpacity>
            <Text></Text>
          </TouchableOpacity>
          <View className="justify-center flex-row pt-5 gap-2">
            <Text className="text-lg text-gray-100 font-spaceMono">
              Have account already?
            </Text>
            <Link href="/login" className="text-lg text-dark_green">
              login
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default register;
