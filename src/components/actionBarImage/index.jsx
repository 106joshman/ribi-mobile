import React from "react";
import { Image, View } from "react-native";

export default function ActionBarImage() {
  return (
    <View>
      <Image
        width={100}
        height={100}
        source={require("../../../assets/logo.png")}
      />
    </View>
  );
}
