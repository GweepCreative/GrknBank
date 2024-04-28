import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Fonts } from "@/utils/Fonts";
import { CreditCard, Plus } from "lucide-react-native";

export default function Cards() {
  return (
    <TouchableOpacity className="flex flex-col justify-center items-center space-y-2">
        <View className="bg-[#A7F4FE] flex justify-center items-center rounded-full p-3">
          <CreditCard color="black" size={24} />
        </View>
        <Text className="text-zinc-500" style={{ fontFamily: Fonts.SpaceMono }}>
          Cards
        </Text>
      </TouchableOpacity>
  );
}
