import React, { useState, useEffect } from "react";
import { Text, View, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import * as Font from "expo-font";

export function Button({ title, name, color, onPress }) {
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

export function AuthButton({ title, onPress, disabled, disabledStyle }) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[
        {
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
          padding: 15,
          backgroundColor: "#F6655F",
          marginTop: 20,
        },
        disabledStyle,
      ]}
    >
      <Text
        style={{
          color: "#FFF",
          textTransform: "uppercase",
          fontSize: 24,
          fontFamily: "poppins",
        }}
      >
        {title}
      </Text>
    </Pressable>
  );
}

{
  /* <View>
        <Entypo.Button
          name="chevron-left"
          size={24}
          borderRadius={0}
          backgroundColor="#FFF"
          title="User Info"
          color="black"
          onPress={() => navigation.navigate("Profile")}
        >
          <Text
            style={{
              display: "flex",
              alignItems: "center",
              fontFamily: "poppinsReg",
              fontSize: 24,
            }}
          >
            Pending requests
          </Text>
        </Entypo.Button>
          </View> */
}
