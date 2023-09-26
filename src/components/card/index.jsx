import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Card({ text, number }) {
  const { statCard } = styles;
  return (
    <View style={[statCard]}>
      <Text style={{ fontSize: 40, fontFamily: "poppins", color: "#FFF" }}>
        {number}
      </Text>
      <Text style={{ fontSize: 18, fontFamily: "poppins", color: "#FFF" }}>
        {text}
      </Text>
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
    color: "#FFF",
    borderColor: "#FFF",
    borderWidth: 2,
  },
});
