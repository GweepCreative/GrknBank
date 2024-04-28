import ActivitesItem from "@/components/ActivitesItem";
import CreditCard from "@/components/CreditCard";
import Options from "@/components/Options";
import { Fonts } from "@/utils/Fonts";

import { Text, View } from "react-native";

export default function MainPage() {
  return (
    <View className="flex-1 items-center mx-8">
      <View className="m-4">
        <Text className="text-4xl" style={{ fontFamily: Fonts.SpaceBold }}>
          GRKN BANK
        </Text>
      </View>

      <View className="w-full">
        <CreditCard balance={40000} />
      </View>

      <View className="w-full px-6 m-6">
        <Options />
      </View>

      <View className="w-full p-4">
        <View className="flex flex-row justify-between items-center">
          <Text className="text-2xl" style={{ fontFamily: Fonts.SpaceMedium }}>
            Activites
          </Text>
          <Text style={{ fontFamily: Fonts.SpaceMono }}>Today</Text>
        </View>
        <ActivitesItem title="Netflix" amount={15.99} cardNumber="2732" paymentType="Subs" date="Today" />
        <ActivitesItem title="Dad - FAST" amount={3000} date="Today" />
      </View>
    </View>
  );
}
