import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  FlatList,
} from "react-native";
import React from "react";
import { Fonts } from "@/utils/Fonts";
import { CirclePlus, CreditCard, Plus } from "lucide-react-native";
import {
  BottomSheetModal,
  BottomSheetScrollView,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { FlashList } from "@shopify/flash-list";
import { MasterCardColor } from "../Icons/mastercard";
import { ScrollView } from "react-native-gesture-handler";
import CardsListItem from "../CardsListItem";
export default function Cards() {
  // ref
  const bottomSheetModalRef = React.useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = React.useMemo(() => ["50%"], []);

  // callbacks
  const handlePresentModalPress = React.useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  // const handleSheetChanges = React.useCallback((index: number) => {
  //   console.log("handleSheetChanges", index);
  // }, []);
  return (
    <>
      <TouchableOpacity
        onPress={handlePresentModalPress}
        className="flex flex-col justify-center items-center space-y-2"
      >
        <View className="bg-[#A7F4FE] flex justify-center items-center rounded-full p-3">
          <CreditCard color="black" size={24} />
        </View>
        <Text className="text-zinc-500" style={{ fontFamily: Fonts.SpaceMono }}>
          Cards
        </Text>
      </TouchableOpacity>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        // onChange={handleSheetChanges}
      >
        <View className="flex flex-row items-center justify-between mx-6">
          <Text
            className="text-2xl p-1 self-center"
            style={{ fontFamily: Fonts.SpaceBold }}
          >
            Cards
          </Text>
          <TouchableOpacity>
            <CirclePlus color={"#000"} />
          </TouchableOpacity>
        </View>
        <BottomSheetScrollView style={{ margin: 10 }}>
          <FlashList
            estimatedItemSize={100}
            contentContainerStyle={{ paddingHorizontal: 14 }}
            keyExtractor={(item, index) => index.toString()}
            data={CardLsist.flatMap((item) => Array(4).fill(item))}
            renderItem={({ item, index }) => (
              <CardsListItem item={item} index={index} />
            )}
          />
        </BottomSheetScrollView>
      </BottomSheetModal>
    </>
  );
}
const CardLsist = [
  {
    id: 1,
    title: "Card 1",
    first4: "5313",
    last4: "1234",
  },
  {
    id: 2,
    title: "Card 2",
    first4: "5313",
    last4: "1234",
  },
  {
    id: 3,
    title: "Card 3",
    first4: "5313",
    last4: "1234",
  },
];
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});
