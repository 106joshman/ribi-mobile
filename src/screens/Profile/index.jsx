import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
  Image,
  View,
  ScrollView,
} from "react-native";
import { Button } from "../../components/button";

export default function Profile({ navigation }) {
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView style={{ backgroundColor: "white" }}>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            backgroundColor: "#f6655F",
            padding: 15,
          }}
        >
          {/* USER IMAGE */}
          <Image
            style={{
              height: 100,
              width: 100,
              marginTop: 30,
              marginBottom: 40,
              borderRadius: 100,
            }}
            source={require("../../../assets/Avatar2.png")}
          />

          <View>
            <Text
              style={[
                {
                  color: "#FFF",
                  textTransform: "uppercase",
                  textAlign: "left",
                  fontFamily: "poppins",
                  marginLeft: 20,
                  fontSize: 20,
                },
              ]}
            >
              John Doe
            </Text>
            <Text
              style={[
                {
                  color: "#FFF",
                  textTransform: "uppercase",
                  fontFamily: "poppins",
                  marginLeft: 20,
                  fontSize: 20,
                },
              ]}
            >
              Lagos, Nigeria
            </Text>
          </View>
        </View>

        <View>
          <Button
            onPress={() => navigation.navigate("User Info")}
            name="infocirlceo"
            color="blue"
            title={"Details"}
          />
          <Button
            onPress={() => navigation.navigate("Pending")}
            name="clockcircle"
            color={"gold"}
            title={"Pending"}
          />

          <Button
            onPress={() => navigation.navigate("Donated")}
            name="heart"
            color="red"
            title={"Donated"}
          />

          <Button
            onPress={() => navigation.navigate("Login")}
            name="swap"
            color={"black"}
            title={"Change Password"}
          />
          <Button name="logout" color="red" title={"Logout"} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
  },

  requestTitleGreen: {
    color: "#268d61",
  },
});
