import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import Add from "./OptionsItems/Add";
import Remove from "./OptionsItems/Remove";
import Cards from "./OptionsItems/Cards";
import More from "./OptionsItems/More";

export default function Options() {
  return (
    <View className="flex flex-row w-full justify-between ">
      <Add />
      <Remove />
      <Cards />
      <More />
    </View>
  );
}
