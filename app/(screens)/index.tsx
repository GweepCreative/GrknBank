import ChipIcon from "@/components/Icons/Chip";
import MasterCard from "@/components/Icons/mastercard";
import PaparaLogo from "@/components/Icons/papara";
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
        <View className="p-4 flex-col bg-[#1D1D21] w-full h-48 rounded-2xl overflow-hidden flex justify-between">
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
            <Text className="text-white" style={{ fontFamily: "SpaceMono" }}>
              Available Balance
            </Text>
            <Text
              className="text-white text-3xl"
              style={{ fontFamily: "SpaceMono" }}
            >
              ₺8520.00
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
