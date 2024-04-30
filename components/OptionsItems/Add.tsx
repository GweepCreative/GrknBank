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
export default function Add() {
  // ref
  const bottomSheetModalRef = React.useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = React.useMemo(() => ["50%", "80%"], []);

  // callbacks
  const handlePresentModalPress = React.useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = React.useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

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
        onChange={handleSheetChanges}
      >
        <BottomSheetView style={styles.contentContainer}>
          <Text
            className="text-2xl p-1"
            style={{ fontFamily: Fonts.SpaceBold }}
          >
            Add Modal
          </Text>
          <View className="flex flex-col items-center justify-center w-full px-8 space-y-3">
            <View className="w-full  space-y-2">
              <Text className="text-xl" style={{ fontFamily: Fonts.SpaceBold }}>
                Sender
              </Text>
              <TextInput
                placeholder="ex. Dad"
                className="bg-[#EBE8E8] w-full p-2 rounded-lg text-black"
              />
            </View>
            <View className="w-full space-y-2">
              <Text className="text-xl" style={{ fontFamily: Fonts.SpaceBold }}>
                Description
              </Text>
              <TextInput
                placeholder="ex. FAST"
                className="bg-[#EBE8E8] w-full p-2 rounded-lg text-black"
              />
            </View>
            <View className="w-full space-y-2">
              <Text className="text-xl" style={{ fontFamily: Fonts.SpaceBold }}>
                Amount to be added
              </Text>
              <TextInput
                keyboardType="number-pad"
                placeholder="ex. 3000"
                className="bg-[#EBE8E8] w-full p-2 rounded-lg text-black"
              />
            </View>
            <TouchableOpacity className="w-full items-center justify-center bg-black p-3 rounded-lg overflow-hidden">
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
