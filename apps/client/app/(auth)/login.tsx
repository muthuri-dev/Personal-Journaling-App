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
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "@/graphql/auth.actions";
import { useAuthStore } from "@/store/useAuthStore";

const loginImage = require("@/assets/images/login.png");

const login = () => {
  const [form, setForm] = React.useState({
    password: "",
    username: "",
  });

  //graphql actions
  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    onCompleted(data) {
      Alert.alert("Log in successful");
      router.replace("/home");
      useAuthStore.getState().setToken(data.login.access_token);
      useAuthStore.getState().setUsername(data.login.user.username);
    },
    onError(error) {
      console.log(error);
      Alert.alert("Error occured");
    },
  });

  const submit = async () => {
    if (!form.password || !form.username) {
      Alert.alert("Error", "Pleas fill in all the fields");
    }
    try {
      loginUser({
        variables: { username: form.username, password: form.password },
      });
    } catch (error: any) {
      Alert.alert("Error", error);
      console.log(error);
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
          <TouchableOpacity
            onPress={submit}
            className="bg-dark_green w-full py-6 rounded-lg mt-6 "
          >
            {loading ? (
              <Text className="text-white text-center font-workSansItalic">
                Logging in...
              </Text>
            ) : (
              <Text className="text-white text-center font-workSansItalic">
                Login in
              </Text>
            )}
          </TouchableOpacity>
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
