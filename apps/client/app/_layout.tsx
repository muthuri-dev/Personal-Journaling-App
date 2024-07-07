import { useFonts } from "expo-font";
import { Stack, router, useSegments } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { ApolloProvider } from "@apollo/client";
import "react-native-reanimated";
import client from "@/utils/apollo";
import { useAuthStore } from "@/store/useAuthStore";
import React from "react";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    playwrite: require("@/assets/fonts/PlaywriteFRModerne-VariableFont_wght.ttf"),
    spaceMono: require("@/assets/fonts/SpaceMono-Regular.ttf"),
    workSansItalic: require("@/assets/fonts/WorkSans-Italic-VariableFont_wght.ttf"),
    workSans: require("@/assets/fonts/WorkSans-VariableFont_wght.ttf"),
    latoThinItalic: require("@/assets/fonts/Lato-ThinItalic.ttf"),
    latoBlack: require("@/assets/fonts/Lato-Black.ttf"),
    latpBolditalick: require("@/assets/fonts/Lato-BoldItalic.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  //redirecting

  const { token } = useAuthStore();
  const segments = useSegments();

  React.useEffect(() => {
    const inAuthGroup = segments[0] === "(auth)";
    if (!token && !inAuthGroup) {
      // Redirect to the sign-in page if the user is not signed in
      router.replace("/login");
    } else if (token && inAuthGroup) {
      // Redirect to the home page if the user is signed in and on an auth page
      router.replace("/home");
    }
  }, [token, segments]);
  return (
    <ApolloProvider client={client}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ApolloProvider>
  );
}
