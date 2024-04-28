import { View, Text } from 'react-native'
import React from 'react'
import { FlashList } from "@shopify/flash-list";
import { Fonts } from "@/utils/Fonts";
import ActivitesItem from "@/components/ActivitesItem";
export default function Activities() {
  return (
    <View className="w-full h-full  p-4">
        <View className="flex flex-row justify-between items-center">
          <Text className="text-2xl" style={{ fontFamily: Fonts.SpaceMedium }}>
            Activites
          </Text>
          <Text style={{ fontFamily: Fonts.SpaceMono }}>Today</Text>
        </View>
        <FlashList
          estimatedItemSize={6}
          className="h-full w-full "
          data={[
            {
              title: "Netflix",
              amount: 149.99,
              cardNumber: "2732",
              paymentType: "Subs",
              date: "Today",
            },
            {
              title: "Salary - Fast",
              amount: 50000,
              date: "Today",
            },
          ]}
          renderItem={({ item }) => <ActivitesItem data={item} />}
        />
      </View>
  )
}