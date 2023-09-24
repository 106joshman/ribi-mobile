import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
} from "react-native";
import ViewUserDetail from "../../components/userDetailsView";
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

export default function Profile() {
  const { requestTitle, requestTitleGreen, requestTitleRed } = styles;

  return (
    <SafeAreaView style={styles.main}>
      <ScrollView>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{
              height: 200,
              width: 200,
              borderRadius: 100,
            }}
            source={require("../../../assets/Avatar2.png")}
          />
          <View>
            <Text style={[{ textTransform: "uppercase" }, requestTitle]}>
              John Doe
            </Text>
            <Text
              style={{
                fontFamily: "poppinsReg",
                fontSize: 16,
                marginTop: 5,
                marginBottom: 5,
              }}
            >
              Show details
            </Text>
          </View>
        </View>
        <View
          style={{
            paddingLeft: 40,
            paddingRight: 40,
            paddingTop: 5,
            paddingBottom: 5,
          }}
        >
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

        <View
          style={{
            padding: 10,
            marginTop: 10,
          }}
        >
          <View style={[{}, styles.requestCard]}>
            <Text style={[requestTitle, requestTitleRed]}>
              Pending Requests
            </Text>

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
                    flexDirection: "column",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <Text style={styles.requestTitle}>
                    {moment(item.date).format("MMM")}
                  </Text>
                  <Text style={styles.requestTitle}>
                    {moment(item.date).format("D")}
                  </Text>
                </View>
                <View style={{ display: "flex", flexDirection: "column" }}>
                  <Text style={styles.requestTitle}>
                    {item.hospitalLocation}
                  </Text>
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
          </View>

          <View style={styles.requestCard}>
            <Text style={[requestTitle, requestTitleGreen]}>Donated</Text>

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
                    flexDirection: "column",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <Text style={styles.requestTitle}>
                    {moment(item.date).format("MMM")}
                  </Text>
                  <Text style={styles.requestTitle}>
                    {moment(item.date).format("D")}
                  </Text>
                </View>
                <View style={{ display: "flex", flexDirection: "column" }}>
                  <Text style={styles.requestTitle}>
                    {item.hospitalLocation}
                  </Text>
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
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    marginTop: 0,
  },
  requestCard: {
    backgroundColor: "#f1908c1a",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },
  requestTitle: {
    fontFamily: "poppins",
    fontSize: 20,
    textAlign: "center",
  },
  requestTitleGreen: {
    color: "#268d61",
  },
  requestTitleRed: {
    color: "#f6655f",
  },
});
