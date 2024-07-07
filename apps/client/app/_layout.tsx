import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

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

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
