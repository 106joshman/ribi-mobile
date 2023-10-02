import React, { useState } from "react";
import {
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Logo from "../../../components/Logo";
import { AuthButton } from "../../../components/button";
import { InputField, PasswordInput } from "../../../components/InputField";

export default function Login({ navigation }) {
  const [loginValue, setLoginValue] = useState({
    email: "",
    password: "",
  });
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.wrapper}>
        <View
          style={{
            marginBottom: 30,
            marginTop: 100,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Logo />
        </View>

        <View>
          <Text style={styles.loginText}>Login</Text>
          <InputField
            placeholder={"Enter your email"}
            accessibilityLabel={"Email"}
            keyboardType={"email-address"}
            onChangeText={(value) => setLoginValue({ email: value })}
          />

          <PasswordInput
            onChangeText={(value) => setLoginValue({ password: value })}
          />

          <View>
            <Pressable>
              <Text style={styles.forgotLink}>Forgot password</Text>
            </Pressable>
          </View>

          <View>
            <AuthButton title={"Login"} />
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <Text style={{ fontFamily: "poppinsLight" }}>
              Don't have an account?{" "}
            </Text>
            <Pressable
              onPress={() => navigation.navigate("Register")}
              style={styles.button}
            >
              <Text style={{ color: "#F6655F", fontFamily: "poppins" }}>
                Sign up here
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "white",
    marginTop: StatusBar.currentHeight || 0,
  },
  wrapper: {
    padding: 10,
  },
  loginText: {
    fontSize: 30,
    fontFamily: "poppins",
    textAlign: "center",
  },
  forgotLink: {
    marginTop: 15,
    fontFamily: "poppinsLight",
    textAlign: "right",
    color: "#F6655F",
  },
});
