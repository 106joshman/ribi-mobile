import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import * as Font from "expo-font";

export default function ViewUserDetail({ title, value }) {
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
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text style={{ fontFamily: "poppins", fontSize: 20, textAlign: "left" }}>
        {title}:
      </Text>
      <View>
        <Text
          style={{
            fontFamily: "poppinsReg",
            fontSize: 20,
            textAlign: "left",
            textTransform: "capitalize",
          }}
        >
          {value}
        </Text>
      </View>
    </View>
  );
}
