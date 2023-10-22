import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import moment from "moment";

const requestList = [
  {
    id: 0,
    date: "2023-09-01T02:22:52.300Z",
    pintOfBlood: 2,
    hospitalLocation: "Military Barracks, Ojo",
  },
  {
    id: 1,
    date: "2023-09-02T02:22:52.300Z",
    pintOfBlood: 2,
    hospitalLocation: "Military Barracks, Ikoyi",
  },
  {
    id: 2,
    date: "2023-09-03T02:22:52.300Z",
    pintOfBlood: 2,
    hospitalLocation: "General Hospital, Yaba",
  },
  {
    id: 3,
    date: "2023-09-04T02:22:52.300Z",
    pintOfBlood: 2,
    hospitalLocation: "General Hospital, Ikorodu",
  },
  {
    id: 4,
    date: "2023-09-05T02:22:52.300Z",
    pintOfBlood: 2,
    hospitalLocation: "Lagos state Teaching Hospital",
  },
];

const DateText = ({ text }) => {
  return (
    <Text
      style={{
        fontFamily: "poppins",
        fontSize: 20,
        textAlign: "center",
        marginRight: 5,
      }}
    >
      {text}
    </Text>
  );
};

export default function Donated() {
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView style={{ padding: 10 }}>
        {requestList.map((item) => (
          <View
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row",
              borderRadius: 8,
              marginBottom: 12,
              backgroundColor: "#b1b8b5ec",
              padding: 10,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <DateText text={moment(item.date).format("MMM")} />
              <DateText text={moment(item.date).format("DD")} />
            </View>
            <View>
              <DateText text={item.hospitalLocation} />
              <Text
                style={{
                  textAlign: "right",
                  fontFamily: "poppinsReg",
                  fontSize: 18,
                }}
              >
                {item.pintOfBlood} Pint of blood
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "white",
  },
});
