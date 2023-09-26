import React from "react";
import {  Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Button({ title, name, color, onPress }) {
  return (
    <View>
      <AntDesign.Button
        name={name}
        size={24}
        borderRadius={0}
        backgroundColor="#FFF"
        iconStyle={{ margin: 10, padding: 5 }}
        color={color}
        onPress={onPress}
      >
        <Text
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            fontSize: 24,
            fontFamily: "poppins",
          }}
        >
          {title}
        </Text>
      </AntDesign.Button>
    </View>
  );
}
