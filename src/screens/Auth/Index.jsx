import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, View } from "react-native";
import * as Font from "expo-font";
import Logo from "../../components/Logo";
import { AuthButton } from "../../components/button";

export default function Onboarding({ navigation }) {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        poppins: require("../../../assets/fonts/Poppins-Bold.ttf"),
        poppinsReg: require("../../../assets/fonts/Poppins-Regular.ttf"),
        poppinsLight: require("../../../assets/fonts/Poppins-Light.ttf"),
      });

      setFontLoaded(true);
    }

    loadFont();
  }, []);

  if (!fontLoaded) {
    return <Text>Loading...</Text>;
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#f1908c1a",
      }}
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
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
      </View>

      <View style={{ marginBottom: 20, padding: 10 }}>
        <AuthButton
          onPress={() => navigation.navigate("Login")}
          title={"get started"}
        />
      </View>
    </SafeAreaView>
  );
}
