import CreditCard from "@/components/CreditCard";
import Options from "@/components/Options";

import { Text, View } from "react-native";

export default function MainPage() {
  return (
    <View className="flex-1 items-center mx-8">
      <View className="m-4">
        <Text className="text-4xl" style={{ fontFamily: "SpaceMono" }}>
          GRKN BANK
        </Text>
      </View>

      <View className="w-full">
        <CreditCard balance={4001} />
      </View>

      <View className="w-full px-6 m-6">
        <Options />
      </View>
    </View>
  );
}
