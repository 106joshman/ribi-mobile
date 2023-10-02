import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import Logo from "../Logo";

export default function SplashScreen() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#f1908c1a",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          marginBottom: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Logo />
      </View>
      <Text style={{ fontFamily: "poppins", fontSize: 52, color: "#F6655F" }}>
        RIBI BLOOD
      </Text>
    </SafeAreaView>
  );
}
