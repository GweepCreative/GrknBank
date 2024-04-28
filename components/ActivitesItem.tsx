import { View, Text } from "react-native";
import React from "react";
import MasterCard from "./Icons/mastercard";
import { Fonts } from "@/utils/Fonts";
import { BadgeMinus, BadgePlus } from "lucide-react-native";
import classNames from "classnames";

export default function ActivitesItem({
  title,
  paymentType,
  amount,
  cardNumber,
  date,
}: {
  title: string;
  paymentType?: string;
  amount: number;
  cardNumber?: string;
  date: string;
}) {
  return (
    <View className="flex flex-row justify-between w-full pt-4">
      <View className=" flex-row space-x-2">
        <View
          className={classNames(
            "w-14 h-14 rounded-xl p-2 items-center justify-center",
            paymentType ? "bg-[#FF5A5A]" : "bg-[#00AC45]"
          )}
        >
          {paymentType ? (
            <BadgeMinus color={"#fff"} size={30} />
          ) : (
            <BadgePlus color={"#fff"} size={30} />
          )}
        </View>
        <View className=" justify-center items-start ">
          <Text className="text-lg" style={{ fontFamily: Fonts.SpaceMedium }}>
            {title}
          </Text>
          <Text className="-top-2" style={{ fontFamily: Fonts.SpaceMono }}>
            {paymentType ? paymentType : "Income"}
          </Text>
        </View>
      </View>

      <View className="flex flex-col items-end justify-center">
        <Text className="text-lg " style={{ fontFamily: Fonts.SpaceMedium }}>
          {paymentType && "-"}
          {new Intl.NumberFormat("tr-TR", {
            style: "currency",
            currency: "TRY",
          }).format(amount)}
        </Text>
        {cardNumber && (
          <View className=" flex flex-row  items-center w-16 h-6 bg-zinc-200 rounded">
            <MasterCard
              className="-left-2"
              style={{
                transform: [{ scale: 0.5 }],
              }}
            />
            <Text
              className="text-xs -left-3"
              style={{ fontFamily: Fonts.SpaceLight }}
            >
              {cardNumber}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
}
