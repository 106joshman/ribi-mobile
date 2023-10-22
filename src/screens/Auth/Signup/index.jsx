import React, { useState, useEffect } from "react";
import {
  Alert,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import * as Font from "expo-font";
import Checkbox from "expo-checkbox";
import { SelectList } from "react-native-dropdown-select-list";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Formik } from "formik";
import * as Yup from "yup";

import { AuthButton } from "../../../components/button";
import Logo from "../../../components/Logo";
import { InputField, PasswordInput } from "../../../components/InputField";

const Gender = [
  { key: "female", value: "Female" },
  { key: "male", value: "Male" },
];

const Samples = [
  { key: "A", value: "A" },
  { key: "A-", value: "A-" },
  { key: "A+", value: "A+" },
  { key: "B", value: "B" },
  { key: "B-", value: "B-" },
  { key: "B+", value: "B+" },
  { key: "AB", value: "AB" },
  { key: "AB-", value: "AB-" },
  { key: "AB+", value: "AB+" },
  { key: "O", value: "O" },
  { key: "O-", value: "O-" },
  { key: "O+", value: "O+" },
];

const RegisterSchema = Yup.object().shape({
  fullname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  gender: Yup.string().required("Required"),
  bloodType: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
  mobile: Yup.string()
    .min(11, "Must be exactly 11 digits")
    .max(11, "Must be exactly 11 digits")
    .matches(/^[0-9]+$/, "Must be only digits")
    .required("Phone number is required"),
  // birthDate: Yup.string(),
  email: Yup.string()
    .email("Invalid email")
    .required("Please enter your email"),
  password: Yup.string()
    .min(8)
    .required("Please enter your Password")
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      `Must contain 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character`
    ),
  // checked: Yup.boolean().oneOf(
  //   [true],
  //   "You must accept the terms and conditions"
  // ),
});

export default function Register({ navigation }) {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date());
  const [checked, setChecked] = useState(false);

  const formatDate = (rawDate) => {
    let date = new Date(rawDate);

    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();

    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;

    return `${day}-${month}-${year}`;
  };

  const onChange = ({ type }, selectedDate) => {
    if (type == "set") {
      const currentDate = selectedDate;
      setDate(currentDate);

      if (Platform.OS === "android") {
        setShow(!show);
        setDateOfBirth(formatDate(currentDate));
      }
    } else {
      setShow(!show);
    }
  };

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        poppins: require("../../../../assets/fonts/Poppins-Bold.ttf"),
        poppinsReg: require("../../../../assets/fonts/Poppins-Regular.ttf"),
        poppinsLight: require("../../../../assets/fonts/Poppins-Light.ttf"),
      });

      setFontLoaded(true);
    }

    loadFont();
  }, []);

  if (!fontLoaded) {
    return <Text>Loading...</Text>;
  }
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ padding: 20 }}>
        {/* <View style={styles.wrapper}> */}
        <View
          style={{
            marginTop: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Logo />
        </View>

        <Formik
          initialValues={{
            fullname: "",
            gender: "",
            bloodType: "",
            address: "",
            mobile: "",
            // birthDate: "",
            email: "",
            password: "",
            // checked: false,
          }}
          validationSchema={RegisterSchema}
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
              <Text style={styles.loginText}>Create an Account</Text>

              <InputField
                value={values.fullname}
                placeholder={"Full name"}
                accessibilityLabel={"Full name"}
                onChangeText={handleChange("fullname")}
                onBlur={() => setFieldTouched("fullname")}
              />
              {touched.fullname && errors.fullname && (
                <Text style={styles.errorTxt}>{errors.fullname}</Text>
              )}

              <View>
                <SelectList
                  placeholder={"Gender"}
                  fontFamily="poppinsLight"
                  style={{ placeholderTextColor: "red" }}
                  inputStyles={{ fontSize: 18 }}
                  dropdownStyles={{
                    backgroundColor: "grey",
                    position: "absolute",
                    top: 40,
                    width: "100%",
                    zIndex: 999,
                  }}
                  dropdownTextStyles={{
                    color: "white",
                    fontSize: 18,
                  }}
                  boxStyles={{
                    borderRadius: 8,
                    marginTop: 20,
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    borderWidth: 0,
                    borderBottomColor: "#AD9FA3",
                    borderBottomWidth: 1,
                  }}
                  search={false}
                  data={Gender}
                  value={values.gender}
                  setSelected={handleChange("gender")}
                />
              </View>
              {touched.gender && errors.gender && (
                <Text style={styles.errorTxt}>{errors.gender}</Text>
              )}

              <InputField
                value={values.address}
                placeholder={"Address"}
                accessibilityLabel={"Address"}
                onChangeText={handleChange("address")}
                onBlur={() => setFieldTouched("address")}
              />
              {touched.address && errors.address && (
                <Text style={styles.errorTxt}>{errors.address}</Text>
              )}

              <InputField
                value={values.mobile}
                placeholder={"Phone Number"}
                accessibilityLabel={"Phone Number"}
                keyboardType={"numeric"}
                onChangeText={handleChange("mobile")}
                onBlur={() => setFieldTouched("mobile")}
              />
              {touched.mobile && errors.mobile && (
                <Text style={styles.errorTxt}>{errors.mobile}</Text>
              )}

              <View>
                <SelectList
                  placeholder={"Select Blood type"}
                  fontFamily="poppinsLight"
                  style={{ placeholderTextColor: "red" }}
                  inputStyles={{ fontSize: 18 }}
                  dropdownStyles={{
                    backgroundColor: "grey",
                    position: "absolute",
                    top: 40,
                    width: "100%",
                    zIndex: 999,
                  }}
                  dropdownTextStyles={{
                    color: "white",
                    fontSize: 18,
                  }}
                  boxStyles={{
                    borderRadius: 8,
                    marginTop: 20,
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    borderWidth: 0,
                    borderBottomColor: "#AD9FA3",
                    borderBottomWidth: 1,
                  }}
                  search={false}
                  data={Samples}
                  value={values.bloodType}
                  setSelected={handleChange("bloodType")}
                />
              </View>
              {touched.bloodType && errors.bloodType && (
                <Text style={styles.errorTxt}>{errors.bloodType}</Text>
              )}

              <View>
                <Pressable onPress={() => setShow(true)}>
                  <InputField
                    placeholder={"Date of Birth"}
                    accessibilityLabel={"Date of birth"}
                    value={values.birthDate}
                    editable={false}
                    onChangeText={handleChange("birthDate")}
                    onBlur={() => setFieldTouched("birthDate")}
                  />
                </Pressable>
                {touched.birthDate && errors.birthDate && (
                  <Text style={styles.errorTxt}>{errors.birthDate}</Text>
                )}

                {show && (
                  <DateTimePicker
                    mode={"date"}
                    value={date}
                    maximumDate={new Date("2005-01-01")}
                    minimumDate={new Date("1980-01-01")}
                    is24Hour={true}
                    onChange={onChange}
                  />
                )}
              </View>

              <InputField
                value={values.email}
                placeholder={"Email"}
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

              <View
                style={{
                  marginTop: 5,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Checkbox
                  style={{
                    margin: 8,
                    width: 22,
                    height: 22,
                  }}
                  disabled={false}
                  value={checked}
                  color={checked ? "#F6655F" : undefined}
                  onValueChange={setChecked}
                />
                <Text
                  style={{
                    color: "#F6655F",
                    fontFamily: "poppinsReg",
                    fontSize: 15,
                  }}
                >
                  Terms of Service, Privacy Policy and User Agreement
                </Text>
              </View>
              {/* {touched.checked && errors.checked && (
                <Text style={styles.errorTxt}>{errors.checked}</Text>
              )} */}

              <View>
                <AuthButton
                  onPress={handleSubmit}
                  title={"SIGN UP"}
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
                  alignItems: "center",
                }}
              >
                <Text style={{ fontFamily: "poppinsLight" }}>
                  Already have an account?{" "}
                </Text>
                <Pressable
                  onPress={() => navigation.goBack()}
                  style={styles.button}
                >
                  <Text
                    style={{
                      color: "#F6655F",
                      fontFamily: "poppins",
                    }}
                  >
                    Sign in here
                  </Text>
                </Pressable>
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
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
  errorTxt: {
    fontSize: 12,
    color: "#FF0D10",
  },
});
