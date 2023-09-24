import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Card({ text, number }) {
  const { statCard } = styles;
  return (
    <View style={[statCard]}>
      <Text style={{ fontSize: 40, fontFamily: "poppins" }}>{number}</Text>
      <Text style={{ fontSize: 18, fontFamily: "poppins" }}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  statCard: {
    borderRadius: 10,
    height: 130,
    width: 125,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#F6655F",
    borderColor: "#F6655F",
    borderWidth: 2,
  },
});
