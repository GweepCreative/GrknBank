import { View, Text, TextInput, KeyboardTypeOptions } from "react-native";
import React from "react";
import { Fonts } from "@/utils/Fonts";
import classNames from "classnames";

export default function ModalTextInput({
  onChangeText,
  value,
  placeholder,
  keyboardType,
  title,
  className,
}: {
  onChangeText: (text: string) => void;
  value: string;
  placeholder: string;
  keyboardType: KeyboardTypeOptions;
  title: string;
  className?: string;
}) {
  return (
    <View className={classNames("w-full space-y-2 my-1", className)}>
      <Text className="text-xl" style={{ fontFamily: Fonts.SpaceBold }}>
        {title}
      </Text>
      <TextInput
        keyboardType={keyboardType}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        style={{ fontFamily: Fonts.SpaceMono }}
        className="bg-[#EBE8E8] w-full p-2 rounded-lg text-black"
      />
    </View>
  );
}
