import { Text, TextInput, View } from "react-native";
import React from "react";

const FormField = ({
  title,
  value,
  handleChangeText,
  otherStyles,
  keyboardType,
  placehoder,
  placehoderTextColor,
  ...props
}: {
  title: string;
  value: string;
  handleChangeText: (event: string) => void;
  otherStyles?: string;
  keyboardType?: string;
  placehoder: string;
  placehoderTextColor: string;
}) => {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  return (
    <View className={`space-x-2 ${otherStyles}`}>
      <Text className="text-base text-gray-200 font-spaceMono">{title}</Text>
      <View
        className="border-2 border-black-200 rounded-l
      md w-full h-16 px-4 bg-black-100 focus:border-secondary items-center flex-row mt-2"
      >
        <TextInput
          className="flex-1 text-white text-base font-workSansItalic"
          placeholder={placehoder}
          placeholderTextColor={placehoderTextColor}
          onChangeText={handleChangeText}
          secureTextEntry={title.includes("Password") && !showPassword}
        />
      </View>
    </View>
  );
};

export default FormField;
