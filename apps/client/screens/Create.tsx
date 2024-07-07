import { View, Text, Pressable, TextInput } from "react-native";
import React from "react";
import { useCreate } from "@/store/useCreate";
import DateTimePicker from "@react-native-community/datetimepicker";
import Button from "@/components/Button";
import { useAuthStore } from "@/store/useAuthStore";

//navigation for screens
interface CreatePageProps {
  onNavigate: (screen: number) => void;
}
const Create = ({ onNavigate }: CreatePageProps) => {
  //getting data from the global store
  const { mood, category } = useCreate();

  //extracting date
  const [date, setDate] = React.useState<Date>(new Date());
  const [showPicker, setShowPicker] = React.useState<boolean>(false);
  const [mode, setMode] = React.useState("date");

  const onChange = (event: any, selectedDate: any) => {
    setDate(selectedDate);
    setShowPicker(false);
  };
  const showMode = (modeToShow: string) => {
    setShowPicker(!showPicker);
    setMode(modeToShow);
  };

  //getting username from auth store
  const { username } = useAuthStore();

  //TODO : Submit data to the database through api
  return (
    <>
      <View className="w-full items-end mt-2 px-3">
        <View className="bg-dark_green justify-center items-center rounded-full h-10 w-10">
          <Text className="text-white font-spaceMono text-2xl">
            {username.charAt(0).toLocaleUpperCase()}
          </Text>
        </View>
      </View>
      <Text className="text-white font-playwrite text-xl pt-10 text-center">
        {`Why is ${category} making you feel ${mood}`}
      </Text>
      <View className="mt-10 px-5">
        <TextInput
          multiline={true}
          numberOfLines={4}
          placeholder="Title for the moment"
          placeholderTextColor="white"
          className="border border-dark_green rounded-md pl-3 font-playwrite"
        />
        <Text className="text-white font-playwrite text-sm pt-10 text-center">
          your story
        </Text>
        <TextInput
          multiline={true}
          numberOfLines={15}
          placeholder="Title for the moment"
          placeholderTextColor="white"
          className="border border-dark_green rounded-md pl-3 mt-6 font-playwrite"
        />
        <View>
          <Text className="text-white font-playwrite text-sm pt-10 text-center">
            When did it happen?
          </Text>
          {showPicker && (
            <DateTimePicker
              mode="date"
              display="spinner"
              value={date}
              onChange={onChange}
              is24Hour={true}
            />
          )}
          <Pressable onPress={() => showMode("date")}>
            <TextInput
              placeholder={new Date().toLocaleString()}
              placeholderTextColor="white"
              editable={false}
              value={date.toLocaleString()}
              className="border border-dark_green rounded-md pl-3 mt-6 font-spaceMono text-white py-2"
            />
          </Pressable>
        </View>
        <Button title="Add To Journal" handlePress={() => {}} />
      </View>
    </>
  );
};

export default Create;
