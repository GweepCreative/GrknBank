import { View, Text } from "react-native";
import React from "react";
import { Slot } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
export default function Layout() {
  return (
    <SafeAreaView className="flex-1">
     
        <Slot />
      <StatusBar animated style="dark" />
    </SafeAreaView>
  );
}
