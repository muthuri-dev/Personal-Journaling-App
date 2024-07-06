import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Button = ({
  title,
  textStyle,
  btnStyle,
  isLoading,
  handlePress,
  ...props
}: {
  title: string;
  textStyle?: string;
  btnStyle?: string;
  isLoading?: boolean;
  handlePress: () => void;
}) => {
  return (
    <TouchableOpacity
      className={`bg-dark_green w-full py-6 rounded-lg mt-6 ${btnStyle}`}
    >
      <Text
        className={`text-white text-center font-workSansItalic ${textStyle}`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
