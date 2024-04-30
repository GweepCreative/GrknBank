import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Keyboard,
} from "react-native";
import React, { useEffect } from "react";
import { Fonts } from "@/utils/Fonts";
import { Plus } from "lucide-react-native";
import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import ModalTextInput from "../OptionsItemsModals/CustomTextInput";
export default function Add() {
  //states
  const [sender, setSender] = React.useState("");
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
        <View className="bg-[#EBB2FF] flex justify-center items-center rounded-full p-3">
          <Plus color="black" size={24} />
        </View>
        <Text className="text-zinc-500" style={{ fontFamily: Fonts.SpaceMono }}>
          Add
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
            Add Balance
          </Text>
          <View className="flex flex-col items-center justify-center w-full px-8 space-y-4">
            <ModalTextInput
              title="Sender"
              keyboardType="default"
              onChangeText={(text) => setSender(text)}
              placeholder="ex. Dad"
              value={sender}
              key={"SenderInput"}
            />
            <ModalTextInput
              title="Description"
              keyboardType="default"
              onChangeText={(text) => setDescription(text)}
              placeholder="ex. FAST"
              value={description}
              key={"DescriptionInput"}
            />
            <ModalTextInput
              title="Amount to be added"
              keyboardType="number-pad"
              onChangeText={(text) => setAmount(text)}
              placeholder="ex. 3000"
              value={amount}
              key={"AmountInput"}
            />
            <TouchableOpacity
              onPress={closeModal}
              className="w-full items-center justify-center bg-black p-3 rounded-lg overflow-hidden"
            >
              <Text
                className="text-white"
                style={{ fontFamily: Fonts.SpaceSemiBold }}
              >
                Add
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
