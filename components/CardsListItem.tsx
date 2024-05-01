import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MasterCardColor } from "./Icons/mastercard";
import { Fonts } from "@/utils/Fonts";

export default function CardsListItem({
  item,
  index,
}: {
  item: any;
  index: number;
}) {
  return (
    <TouchableOpacity
      
      className="flex flex-row  justify-start space-x-2 items-center w-full bg-[#f1efef] p-3 m-1 rounded-lg"
    >
      <MasterCardColor />
      <View className="flex flex-col">
        <Text className="" style={{ fontFamily: Fonts.SpaceMono }}>
          #{index + 1} {item.title}
        </Text>
        <Text
          className="text-sm opacity-50"
          style={{ fontFamily: Fonts.SpaceMono }}
        >
          {item.first4} **** **** {item.last4}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
