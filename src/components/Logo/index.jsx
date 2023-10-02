import React from "react";
import { Image, View } from "react-native";

export default function Logo() {
  return (
    <View>
      <Image
        width={200}
        height={200}
        source={require("../../../assets/logo.png")}
      />
    </View>
  );
}
