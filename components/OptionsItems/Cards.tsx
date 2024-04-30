import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Fonts } from "@/utils/Fonts";
import { CreditCard, Plus } from "lucide-react-native";
import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
export default function Cards() {
  // ref
  const bottomSheetModalRef = React.useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = React.useMemo(() => [80, "50%"], []);

  // callbacks
  const handlePresentModalPress = React.useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = React.useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);
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
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <BottomSheetView style={styles.contentContainer}>
          <Text>Card Modal</Text>
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
