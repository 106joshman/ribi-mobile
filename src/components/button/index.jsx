import React from "react";
import { Pressable, Text } from "react-native";

export default function Button({ title, buttonStyle }) {
  return (
    <Pressable style={buttonStyle}>
      <Text>{title}</Text>
    </Pressable>
  );
}
