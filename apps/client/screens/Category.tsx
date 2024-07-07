import { View, Image, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useCreate } from "@/store/useCreate";
import { useAuthStore } from "@/store/useAuthStore";

//from assets
const sadImage = require("@/assets/images/sad.png");
const greatImage = require("@/assets/images/great.png");
const cryImage = require("@/assets/images/cry.png");
const silentImage = require("@/assets/images/silent.png");
const loveImage = require("@/assets/images/love.png");

const journalCategories = [
  "Personal",
  "Travel",
  "Dreams",
  "Goals",
  "Work",
  "Health",
  "Travel",
  "Finances",
  "Relationships",
  "Learning",
  "Creative",
  "Quotes",
  "Ideas",
  "Random Thoughts",
];

//navigation for screens
interface CategotyPageProps {
  onNavigate: (screen: number) => void;
}
const Category = ({ onNavigate }: CategotyPageProps) => {
  //from the global store and adding category to the store
  const { mood, setCategory } = useCreate();
  const submit = (cat: string) => {
    setCategory(cat);
    onNavigate(4);
  };

  //getting username from auth store
  const { username } = useAuthStore();
  return (
    <>
      <View className="w-full items-end mt-2 px-3">
        <View className="bg-dark_green justify-center items-center rounded-full h-10 w-10">
          <Text className="text-white font-spaceMono text-2xl">
            {username.charAt(0).toLocaleUpperCase()}
          </Text>
        </View>
      </View>
      <View className="mt-20">
        {mood === "cryin" ? (
          <Image
            source={cryImage}
            resizeMode="contain"
            className="w-full h-40 rounded-full"
          />
        ) : mood === "great" ? (
          <Image
            source={greatImage}
            resizeMode="contain"
            className="w-full h-40 rounded-full"
          />
        ) : mood === "lovely" ? (
          <Image
            source={loveImage}
            resizeMode="contain"
            className="w-full h-40 rounded-full"
          />
        ) : mood === "sad" ? (
          <Image
            source={sadImage}
            resizeMode="contain"
            className="w-full h-40 rounded-full"
          />
        ) : (
          <Image
            source={silentImage}
            resizeMode="contain"
            className="w-full h-40 rounded-full"
          />
        )}
      </View>
      <View>
        <Text className="text-white font-playwrite text-xl pt-10 text-center">
          What's making you feel this way?
        </Text>
        <View className="flex flex-row flex-wrap justify-center pt-10 gap-4">
          {journalCategories.map((cat, index) => (
            <TouchableOpacity
              onPress={() => submit(cat)}
              key={index}
              className="bg-dark_green rounded-lg w-32 items-center"
            >
              <Text className="text-white font-spaceMono text-sm py-4 px-2 ">
                {cat}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </>
  );
};

export default Category;
