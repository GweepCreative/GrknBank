import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
  TextInput,
} from "react-native";
import React, { useEffect } from "react";
import { Fonts } from "@/utils/Fonts";
import { Minus } from "lucide-react-native";
import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import ModalTextInput from "../OptionsItemsModals/CustomTextInput";
import MasterCard from "../Icons/mastercard";
export default function Remove() {
  //states
  const [payout, setPayout] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [amount, setAmount] = React.useState("");
  // ref
  const bottomSheetModalRef = React.useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = React.useMemo(() => ["50%", "80%"], []);

  // callbacks
  const handlePresentModalPress = React.useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const closeModal = React.useCallback(() => {
    bottomSheetModalRef.current?.close();
  }, []);
  // const handleSheetChanges = React.useCallback((index: number) => {
  // console.log("handleSheetChanges", index);
  // }, []);

  // keyboard
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        // console.log("keyboardDidShow");
        bottomSheetModalRef.current?.snapToIndex(1);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        // console.log("keyboardDidHide");
        bottomSheetModalRef.current?.snapToIndex(0);
      }
    );
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  return (
    <>
      <TouchableOpacity
        onPress={handlePresentModalPress}
        className="flex flex-col justify-center items-center space-y-2"
      >
        <View className="bg-[#A7FED9] flex justify-center items-center rounded-full p-3">
          <Minus color="black" size={24} />
        </View>
        <Text className="text-zinc-500" style={{ fontFamily: Fonts.SpaceMono }}>
          Remove
        </Text>
      </TouchableOpacity>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        // onChange={handleSheetChanges}
      >
        <BottomSheetView style={styles.contentContainer}>
          <Text
            className="text-2xl p-1"
            style={{ fontFamily: Fonts.SpaceBold }}
          >
            Remove Balance
          </Text>
          <View className="flex flex-col items-center justify-center w-full px-8 space-y-4">
            <ModalTextInput
              title="Payout"
              keyboardType="default"
              onChangeText={(text) => setPayout(text)}
              placeholder="ex. Netflix"
              value={payout}
              key={"PayoutInput"}
            />
            <ModalTextInput
              title="Description"
              keyboardType="default"
              onChangeText={(text) => setDescription(text)}
              placeholder="ex. Subs"
              value={description}
              key={"DescriptionInput"}
            />
            <View className="flex flex-row w-full">
              <View className="flex flex-col w-1/2">
                <Text
                  className="text-xl"
                  style={{ fontFamily: Fonts.SpaceBold }}
                >
                  Amount
                </Text>

                <TextInput
                  keyboardType={"number-pad"}
                  placeholder={"ex. 3000"}
                  onChangeText={(text) => setAmount(text)}
                  value={amount}
                  style={{ fontFamily: Fonts.SpaceMono }}
                  className="bg-[#EBE8E8] w-full p-2 rounded-lg text-black"
                />
              </View>

              <View className="flex flex-col w-full">
                <Text
                  className="text-xl"
                  style={{ fontFamily: Fonts.SpaceBold }}
                >
                  Card
                </Text>
                <View className="flex flex-1 flex-row space-x-2 ">
                  <View className="w-1/2 justify-center space-x-2  flex flex-row  items-center bg-[#EBE8E8] rounded-lg">
                    <MasterCard withColor />
                    <Text style={{ fontFamily: Fonts.SpaceLight }}>2736</Text>
                  </View>
                </View>
              </View>
            </View>

            <TouchableOpacity
              onPress={closeModal}
              className="w-full items-center justify-center bg-black p-3 rounded-lg overflow-hidden"
            >
              <Text
                className="text-white"
                style={{ fontFamily: Fonts.SpaceSemiBold }}
              >
                Spent it
              </Text>
            </TouchableOpacity>
          </View>
        </BottomSheetView>
      </BottomSheetModal>
    </>
  );
}
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
