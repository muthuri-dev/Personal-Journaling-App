import { FlatList, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

//dummy data
const journal = [
  {
    title: "First Post",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category: "General",
    feeling: "Neutral",
    date: "2024-07-07",
  },
  {
    title: "Exciting News",
    content: "Today was a great day! I received some exciting news.",
    category: "Personal",
    feeling: "Happy",
    date: "2024-07-06",
  },
  {
    title: "Thoughts on AI",
    content: "Artificial Intelligence is revolutionizing many industries.",
    category: "Technology",
    feeling: "Interested",
    date: "2024-07-05",
  },
  {
    title: "Movie Review",
    content:
      "Watched a new movie today. It was entertaining but predictable.Watched a new movie today. It was entertaining but predictable",
    category: "Entertainment",
    feeling: "Mixed",
    date: "2024-07-04",
  },
];
const create = () => {
  return (
    <SafeAreaView className="h-full bg-[#438f78]">
      <FlatList
        data={journal}
        renderItem={({ item }) => (
          <View className="w-full items-center">
            <View className="w-[90%] h-44 border border-dark_green rounded-lg mb-2 p-3">
              <View className="flex-row justify-between">
                <Text className="text-white font-spaceMono text-xl underline">
                  {item.title}
                </Text>
                <Text className="text-xs text-pink font-playwrite pt-2">
                  {item.date}
                </Text>
              </View>
              <Text className="text-white font-playwrite text-lg mt-2">
                {item.content.slice(0, 75)}...
              </Text>
              <View className="flex-row justify-between flex-1 items-end">
                <Text className="text-dark_green font-latpBolditalick">
                  #{item.feeling}
                </Text>
                <Text className="text-dark_green font-workSansItalic">
                  {item.category}
                </Text>
              </View>
            </View>
          </View>
        )}
        ListHeaderComponent={() => (
          <View className="flex flex-row justify-between p-3">
            <Text className="font-playwrite text-2xl pt-2">
              Journal memories 💯
            </Text>
            <View className="bg-dark_green justify-center items-center rounded-full h-10 w-10">
              <Text className="text-white ">KM</Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default create;
