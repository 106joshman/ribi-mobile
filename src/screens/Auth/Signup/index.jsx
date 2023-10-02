import React, { useState, useEffect } from "react";
import {
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import * as Font from "expo-font";
import { AuthButton } from "../../../components/button";
import Logo from "../../../components/Logo";
import { InputField, PasswordInput } from "../../../components/InputField";
import Checkbox from "expo-checkbox";
import { SelectList } from "react-native-dropdown-select-list";
import DateTimePicker from "@react-native-community/datetimepicker";

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

export default function Register({ navigation }) {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date());
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [fullName, setFullName] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
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
      <View style={styles.wrapper}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Logo />
        </View>

        <View>
          <Text style={styles.loginText}>Create an Account</Text>

          <InputField
            value={fullName}
            placeholder={"Enter your full name"}
            accessibilityLabel={"Full name"}
            onChangeText={setFullName}
          />

          <InputField
            value={email}
            placeholder={"Enter your email"}
            accessibilityLabel={"Email"}
            keyboardType={"email-address"}
            onChangeText={setEmail}
          />

          <View>
            <SelectList
              placeholder={"Select Blood group"}
              fontFamily="poppinsLight"
              style={{ placeholderTextColor: "red" }}
              inputStyles={{ fontSize: 20 }}
              accessibilityLabel={"Blood group"}
              value={bloodType}
              boxStyles={{
                borderRadius: 8,
                marginTop: 20,
                paddingLeft: 10,
                borderWidth: 0,
                borderBottomColor: "#AD9FA3",
                borderBottomWidth: 1,
              }}
              search={false}
              data={Samples}
              setSelected={setBloodType}
            />
          </View>

          <InputField
            value={address}
            placeholder={"Address"}
            accessibilityLabel={"Address"}
            onChangeText={setAddress}
          />

          <View>
            <Pressable onPress={() => setShow(true)}>
              <InputField
                placeholder={"Date of Birth"}
                accessibilityLabel={"Date of birth"}
                value={dateOfBirth}
                editable={false}
                onChangeText={setDateOfBirth}
              />
            </Pressable>

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

          <PasswordInput value={password} onChangeText={setPassword} />

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

          <View>
            <AuthButton title={"SIGN UP"} />
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
      </View>
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
});
