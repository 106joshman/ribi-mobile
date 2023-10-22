import React, { useState, useEffect } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import * as Font from "expo-font";
import { Feather } from "@expo/vector-icons";

export function InputField({
  placeholder,
  onChangeText,
  accessibilityLabel,
  keyboardType,
  editable,
  value,
  onBlur,
}) {
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
    <View style={styles.inputWrap}>
      <TextInput
        style={({ marginBottom: 5 }, styles.input)}
        value={value}
        // autoCapitalize={false}
        cursorColor={"grey"}
        arial-label={accessibilityLabel}
        placeholder={placeholder}
        placeholderTextColor={"#606061"}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        autoCorrect={false}
        onBlur={onBlur}
        editable={editable}
      />
    </View>
  );
}

export function PasswordInput({ onChangeText, value, onBlur }) {
  const [show, setShow] = useState(false);
  return (
    <View
      style={[
        {
          flexDirection: "row",
          alignItems: "center",
          // justifyContent: "space-between",
        },
        styles.inputWrap,
      ]}
    >
      <TextInput
        style={[{ flex: 1 }, styles.input]}
        value={value}
        // autoCapitalize={false}
        inputMode="text"
        cursorColor={"grey"}
        secureTextEntry={!show}
        aria-label="Password"
        placeholder="Enter your password"
        placeholderTextColor={"#606061"}
        onChangeText={onChangeText}
        autoCorrect={false}
        onBlur={onBlur}
      />
      <Feather
        name={show ? "eye-off" : "eye"}
        size={24}
        color="black"
        style={{ marginLeft: 10 }}
        onPress={() => setShow(!show)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    paddingVertical: 0,
    fontFamily: "poppinsLight",
  },
  inputWrap: {
    borderRadius: 8,
    marginTop: 25,
    padding: 0,
    paddingHorizontal: 10,
    justifyContent: "center",
    borderBottomColor: "#AD9FA3",
    borderBottomWidth: 1,
    fontFamily: "poppinsLight",
  },
});
