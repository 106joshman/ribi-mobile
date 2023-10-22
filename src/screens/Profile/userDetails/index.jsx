import React from "react";
import { SafeAreaView, View, Text, StyleSheet, StatusBar } from "react-native";
import ViewUserDetail from "./userDetailsView";


export default function UserDetails() {
  return (
    <SafeAreaView style={styles.main}>
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
    // marginTop: StatusBar.currentHeight || 0,
    // marginTop: 100,
    backgroundColor: "white",
  },
});
