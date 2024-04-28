import { View, Text } from "react-native";
import React from "react";
import MasterCard from "./Icons/mastercard";
import PaparaLogo from "./Icons/papara";
import ChipIcon from "./Icons/Chip";
import { Fonts } from "@/utils/Fonts";

export default function CreditCard({ balance }: { balance: number }) {
  return (
    <View
      style={{
        shadowColor: "#1D1D21",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 25,
      }}
      className="py-6 px-6 flex-col bg-[#1D1D21] w-full h-52 rounded-2xl overflow-hidden flex justify-between"
    >
      {/* BANK */}
      <View className="flex flex-row justify-between">
        <MasterCard />
        <PaparaLogo className="opacity-25" height={30} />
      </View>

      {/* CHIP */}
      <View className="w-full items-end">
        <ChipIcon />
      </View>

      {/* BALANCE */}
      <View className="flex flex-col justify-center space-y-2">
        <Text className="text-white" style={{ fontFamily: Fonts.SpaceMono }}>
          Available Balance
        </Text>
        <Text
          className="text-white text-3xl"
          style={{ fontFamily: Fonts.SpaceBold }}
        >
          {new Intl.NumberFormat("tr-TR", {
            style: "currency",
            currency: "TRY",
          }).format(balance)}
        </Text>
      </View>
    </View>
  );
}
