import Activities from "@/components/Activities";
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
        <CreditCard balance={50000 - 149.99} />
      </View>
      <View className="w-full px-6 m-6">
        <Options />
      </View>
      <Activities />
    </View>
  );
}
