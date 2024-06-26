import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Fonts } from "@/utils/Fonts";
import { Ellipsis, Plus } from "lucide-react-native";

export default function More() {
  return (
    <TouchableOpacity className="flex flex-col justify-center items-center space-y-2">
        <View className="bg-[#FECCA7] flex justify-center items-center rounded-full p-3">
          <Ellipsis color="black" size={24} />
        </View>
        <Text className="text-zinc-500" style={{ fontFamily: Fonts.SpaceMono }}>
          More
        </Text>
      </TouchableOpacity>
  );
}
