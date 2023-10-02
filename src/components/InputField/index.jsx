import React, { useState, useEffect } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import * as Font from "expo-font";

export function InputField({
  placeholder,
  onChangeText,
  accessibilityLabel,
  keyboardType,
  editable,
  value,
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
        inputMode="text"
        value={value}
        arial-label={accessibilityLabel}
        placeholder={placeholder}
        placeholderTextColor={"#606061"}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        autoCorrect={false}
        editable={editable}
      />
    </View>
  );
}

export function PasswordInput({ onChangeText, value }) {
  return (
    <View style={styles.inputWrap}>
      <TextInput
        style={styles.input}
        value={value}
        inputMode="text"
        secureTextEntry={true}
        aria-label="Password"
        placeholder="Enter your password"
        placeholderTextColor={"#606061"}
        onChangeText={onChangeText}
        autoCorrect={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    fontSize: 20,
    paddingVertical: 0,
    fontFamily: "poppinsLight",
  },
  inputWrap: {
    borderRadius: 8,
    marginTop: 20,
    padding: 10,
    justifyContent: "center",
    borderBottomColor: "#AD9FA3",
    borderBottomWidth: 1,
    fontFamily: "poppinsLight",
  },
});
