import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  CreditCard as CreditCardIcon,
  Ellipsis,
  Minus,
  Plus,
} from "lucide-react-native";
import { Fonts } from "@/utils/Fonts";
export default function Options() {
  return (
    <View className="flex flex-row w-full justify-between ">
      <TouchableOpacity className="flex flex-col justify-center items-center space-y-2">
        <View className="bg-[#EBB2FF] flex justify-center items-center rounded-full p-3">
          <Plus color="black" size={24} />
        </View>
        <Text className="text-zinc-500" style={{ fontFamily: Fonts.SpaceMono }}>
          Add
        </Text>
      </TouchableOpacity>
      <TouchableOpacity className="flex flex-col justify-center items-center space-y-2">
        <View className="bg-[#A7FED9] flex justify-center items-center rounded-full p-3">
          <Minus color="black" size={24} />
        </View>
        <Text className="text-zinc-500" style={{ fontFamily: Fonts.SpaceMono }}>
          Remove
        </Text>
      </TouchableOpacity>
      <TouchableOpacity className="flex flex-col justify-center items-center space-y-2">
        <View className="bg-[#A7F4FE] flex justify-center items-center rounded-full p-3">
          <CreditCardIcon color="black" size={24} />
        </View>
        <Text className="text-zinc-500" style={{ fontFamily: Fonts.SpaceMono }}>
          Cards
        </Text>
      </TouchableOpacity>
      <TouchableOpacity className="flex flex-col justify-center items-center space-y-2">
        <View className="bg-[#FECCA7] flex justify-center items-center rounded-full p-3">
          <Ellipsis color="black" size={24} />
        </View>
        <Text className="text-zinc-500" style={{ fontFamily: Fonts.SpaceMono }}>
          More
        </Text>
      </TouchableOpacity>
    </View>
  );
}
