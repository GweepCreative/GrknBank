import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  FlatList,
  TextInput,
} from "react-native";
import React from "react";
import { Fonts } from "@/utils/Fonts";
import { CirclePlus, CreditCard, Plus } from "lucide-react-native";
import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import { FlashList } from "@shopify/flash-list";
import CardsListItem from "../CardsListItem";
import { MasterCardColor } from "../Icons/mastercard";
export default function AddNewCard() {
  //state
  const [cardNumber, setCardNumber] = React.useState<string>("");
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

  const handleTextChange = (text:string) => {
    let newText = "";
    let count = 0;
    for (let i = 0; i < text.length; i++) {
      if (text[i] === " ") continue; // ignore spaces
      if (count > 0 && count % 4 === 0) newText += " ";
      newText += text[i];
      count++;
    }
    setCardNumber(newText);
  };

  return (
    <>
      <TouchableOpacity
        onPress={handlePresentModalPress}
        className="flex flex-col justify-center items-center space-y-2"
      >
        <CirclePlus color={"#000"} />
      </TouchableOpacity>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        // onChange={handleSheetChanges}
      >
        <View className="mx-6 flex flex-row items-center justify-between">
          <Text
            className="text-2xl p-1 self-center"
            style={{ fontFamily: Fonts.SpaceBold }}
          >
            Add New Card
          </Text>
        </View>
        <BottomSheetView style={{ marginHorizontal: 24 }}>
          <View className="w-[100%]">
            <View className="space-x-3 bg-zinc-200 p-3 justify-start items-center flex flex-row rounded-lg w-full overflow-scroll">
              {
                cardNumber.startsWith("5236") && <MasterCardColor />
              }
              <View className="w-[1px] h-full bg-zinc-300" />
              <TextInput
                maxLength={19}
                keyboardType="numeric"
                className="p-2  w-full"
                style={{ fontFamily: Fonts.SpaceMedium }}
                placeholder="0000 0000 0000 0000"
                value={cardNumber}
                onChangeText={handleTextChange}
              />
            </View>
          </View>
        </BottomSheetView>
      </BottomSheetModal>
    </>
  );
}
