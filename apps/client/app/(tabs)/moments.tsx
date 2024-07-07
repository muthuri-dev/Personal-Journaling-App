import { FlatList, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useQuery } from "@apollo/client";
import { GET_USER_JOURNALS } from "@/graphql/journal.actions";
import { useAuthStore } from "@/store/useAuthStore";
import { router } from "expo-router";
import { FloatingAction } from "react-native-floating-action";

interface IJournal {
  category: string;
  content: string;
  date: string;
  feeling: string;
  id: string;
  title: string;
}
const actions = [
  {
    icon: require("@/assets/images/fetch.png"),
    name: "delete",
    position: 1,
  },
];

const create = () => {
  //getting username from global store
  const { username } = useAuthStore();
  //graph actions
  const { data, loading, refetch } = useQuery(GET_USER_JOURNALS, {
    variables: { username },
  });
  const journals: IJournal[] = data?.journals;

  return (
    <SafeAreaView className="h-full bg-[#438f78]">
      <FlatList
        data={journals}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              router.push({
                pathname: `/journal/${item.id}`,
                params: {
                  title: item.title,
                  content: item.content,
                },
              })
            }
          >
            <View className="w-full items-center">
              <View className="w-[90%] h-44 border border-dark_green rounded-lg mb-2 p-3">
                <View className="flex-row justify-between">
                  <Text className="text-white font-spaceMono text-xl underline">
                    {item.title}
                  </Text>
                  <Text className="text-xs text-pink font-playwrite pt-2">
                    {item.date.split(",")[0]}
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
          </TouchableOpacity>
        )}
        ListHeaderComponent={() => (
          <View className="flex flex-row justify-between p-3">
            <Text className="font-playwrite text-2xl pt-2">
              Journal memories 💯
            </Text>
            <View className="bg-dark_green justify-center items-center rounded-full h-10 w-10">
              <Text className="text-white font-spaceMono text-xl">
                {username.charAt(0)}
              </Text>
            </View>
          </View>
        )}
      />
      <FloatingAction
        color="#143029"
        actions={actions}
        actionsPaddingTopBottom={1}
        showBackground={false}
        onPressItem={() => refetch()}
      />
    </SafeAreaView>
  );
};

export default create;
