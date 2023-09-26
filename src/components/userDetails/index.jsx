import React from "react";
import { SafeAreaView, View, Text, StyleSheet, StatusBar } from "react-native";
import ViewUserDetail from "./userDetailsView";
import { Entypo } from "@expo/vector-icons";

export default function UserDetails({ navigation }) {
  return (
    <SafeAreaView style={styles.main}>
      <View>
        <Entypo.Button
          name="chevron-left"
          size={24}
          borderRadius={0}
          backgroundColor="#FFF"
          title="User Info"
          color="black"
          onPress={() => navigation.navigate("UserProfile")}
        >
          <Text
            style={{
              display: "flex",
              alignItems: "center",
              fontFamily: "poppinsReg",
              fontSize: 24,
            }}
          >
            User info
          </Text>
        </Entypo.Button>
      </View>

      <View style={{ padding: 10 }}>
        <ViewUserDetail title={"Email"} value={"xyz@example.com"} />
        <ViewUserDetail title={"Phone"} value={"08012345678"} />
        <ViewUserDetail title={"Gender"} value={"Male"} />
        <ViewUserDetail title={"Date Of Birth"} value={"Today"} />
        <ViewUserDetail title={"Blood Type"} value={"O-"} />
        <ViewUserDetail title={"Country"} value={"Nigeria"} />
        <ViewUserDetail title={"Address"} value={"My house"} />
        <ViewUserDetail title={"State"} value={"Lagos"} />
        <ViewUserDetail title={"City/Town"} value={"Ikorodu"} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    // marginTop: 100,
    backgroundColor: "white",
  },
});
