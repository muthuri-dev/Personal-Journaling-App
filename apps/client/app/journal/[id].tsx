import { View, Text, ScrollView, Alert } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, useLocalSearchParams } from "expo-router";
import { useAuthStore } from "@/store/useAuthStore";
import { FloatingAction } from "react-native-floating-action";
import { useMutation } from "@apollo/client";
import { REMOVE_JOURNAL } from "@/graphql/journal.actions";

const actions = [
  {
    icon: require("@/assets/images/delete.png"),
    name: "delete",
    position: 1,
  },
];

const Journal = () => {
  const { content, id, title } = useLocalSearchParams<{
    id: string;
    title: string;
    date: string;
    feeling: string;
    content: string;
  }>();

  const { username } = useAuthStore();

  //graphql actions
  const [deleteJournal, { loading }] = useMutation(REMOVE_JOURNAL, {
    onCompleted: () => {
      Alert.alert("Deleted Moment");
      router.replace("/moments");
    },
    onError: (error) => {
      Alert.alert("Failed to Deleted Moment", error.message);
      console.log(error.message);
    },
  });

  const handleDelete = () => {
    deleteJournal({ variables: { id } });
  };

  return (
    <SafeAreaView className="h-full bg-[#438f78]">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
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
        <Text className="font-playwrite text-2xl text-center pt-5">
          {title}
        </Text>
        <View className="p-4 border-t-2 border-dark_green">
          <Text className="font-playwrite text-xl">{content}</Text>
        </View>
        <FloatingAction
          color="#143029"
          actions={actions}
          actionsPaddingTopBottom={1}
          showBackground={false}
          onPressItem={handleDelete}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Journal;
