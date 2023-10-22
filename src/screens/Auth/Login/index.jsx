import React from "react";
import {
  Alert,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import Logo from "../../../components/Logo";
import { AuthButton } from "../../../components/button";
import { InputField, PasswordInput } from "../../../components/InputField";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8)
    .required("Please enter your Password")
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      `Must contain 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character`
    ),
});

export default function Login({ navigation }) {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.wrapper}>
        <View
          style={{
            marginBottom: 30,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Logo />
        </View>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={(values) => Alert.alert(JSON.stringify(values))}
        >
          {({
            values,
            errors,
            touched,
            isValid,
            handleChange,
            setFieldTouched,
            handleSubmit,
          }) => (
            <View>
              <Text style={styles.loginText}>Login</Text>

              <InputField
                value={values.email}
                placeholder={"Enter your email"}
                accessibilityLabel={"Email"}
                keyboardType={"email-address"}
                onChangeText={handleChange("email")}
                onBlur={() => setFieldTouched("email")}
              />
              {touched.email && errors.email && (
                <Text style={styles.errorTxt}>{errors.email}</Text>
              )}

              <PasswordInput
                value={values.password}
                onChangeText={handleChange("password")}
                onBlur={() => setFieldTouched("password")}
              />
              {touched.password && errors.password && (
                <Text style={styles.errorTxt}>{errors.password}</Text>
              )}

              <View>
                <Pressable>
                  <Text style={styles.forgotLink}>Forgot password</Text>
                </Pressable>
              </View>

              <View>
                <AuthButton
                  onPress={handleSubmit}
                  title={"Login"}
                  disabled={!isValid}
                  disabledStyle={{
                    backgroundColor: isValid ? "#F6655F" : "grey",
                  }}
                />
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
          )}
        </Formik>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
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
  errorTxt: {
    fontSize: 12,
    fontFamily: "poppinsLight",
    color: "#FF0D10",
  },
  disabledStyle: {
    backgroundColor: "#395B64",
  },
});
