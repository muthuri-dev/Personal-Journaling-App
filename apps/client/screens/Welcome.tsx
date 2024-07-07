import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useCreate } from "@/store/useCreate";

//from assets
const homeImage = require("@/assets/images/thoughts.png");
const sadImage = require("@/assets/images/sad.png");
const greatImage = require("@/assets/images/great.png");
const cryImage = require("@/assets/images/cry.png");
const silentImage = require("@/assets/images/silent.png");
const loveImage = require("@/assets/images/love.png");

//navigation for screens
interface WelcomePageProps {
  onNavigate: (screen: number) => void;
}
interface Mood {
  image: any;
  mood: string;
}

const Welcome = ({ onNavigate }: WelcomePageProps) => {
  const getCurrentTimeOfDay = () => {
    const currentHour = new Date().getHours();
    if (currentHour >= 5 && currentHour < 12) {
      return "Good Morning";
    } else if (currentHour >= 12 && currentHour < 17) {
      return "Good Afternoon";
    } else if (currentHour >= 17 && currentHour < 21) {
      return "Good Evening";
    } else {
      return "Ooh its Night";
    }
  };

  const timeOfDayMessage = getCurrentTimeOfDay();
  const moods: Mood[] = [
    { image: sadImage, mood: "sad" },
    { image: greatImage, mood: "great" },
    { image: cryImage, mood: "crying" },
    { image: silentImage, mood: "silent" },
    { image: loveImage, mood: "lovely" },
  ];

  //handling globals store
  const { setMood } = useCreate();
  const submit = (mood: string) => {
    onNavigate(2);
    setMood(mood);
  };
  return (
    <>
      <View className="w-full items-end mt-2 px-3">
        <View className="bg-dark_green justify-center items-center rounded-full h-10 w-10">
          <Text className="text-white ">KM</Text>
        </View>
      </View>
      <Text className=" text-white font-playwrite text-center text-xl pt-5">
        {timeOfDayMessage} Kennedy
      </Text>
      <Image
        source={homeImage}
        resizeMode="contain"
        className="w-full h-60 mt-10"
      />
      <Text className="text-white font-latpBolditalick text-center text-2xl">
        How are you feeling?
      </Text>
      <View className="flex flex-row justify-around items-center mt-10">
        {moods.map((mood, index) => (
          <TouchableOpacity key={index} onPress={() => submit(mood.mood)}>
            <Image
              source={mood.image}
              resizeMode="contain"
              className="w-16 h-16 rounded-full"
            />
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
};

export default Welcome;
