import React, { useState, useEffect } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import * as Font from "expo-font";

const donorList = [
  {
    id: 0,
    image:
      "https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png",
    firstName: "John",
    lastName: "Doe",
    state: "philly",
    city: "lagos",
    bloodType: "o+",
  },
  {
    id: 1,
    image:
      "https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png",
    firstName: "John",
    lastName: "Doe",
    state: "philly",
    city: "lagos",
    bloodType: "o+",
  },
  {
    id: 2,
    image:
      "https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png",
    firstName: "John",
    lastName: "Doe",
    state: "philly",
    city: "lagos",
    bloodType: "o+",
  },
  {
    id: 3,
    image:
      "https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png",
    firstName: "John",
    lastName: "Doe",
    state: "philly",
    city: "lagos",
    bloodType: "o+",
  },
  {
    id: 4,
    image:
      "https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png",
    firstName: "John",
    lastName: "Doe",
    state: "philly",
    city: "lagos",
    bloodType: "o+",
  },
  {
    id: 5,
    image:
      "https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png",
    firstName: "John",
    lastName: "Doe",
    state: "philly",
    city: "lagos",
    bloodType: "o+",
  },
  {
    id: 6,
    image:
      "https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png",
    firstName: "John",
    lastName: "Doe",
    state: "philly",
    city: "lagos",
    bloodType: "o+",
  },
  {
    id: 7,
    image:
      "https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png",
    firstName: "John",
    lastName: "Doe",
    state: "philly",
    city: "lagos",
    bloodType: "o+",
  },
  {
    id: 8,
    image:
      "https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png",
    firstName: "John",
    lastName: "Doe",
    state: "philly",
    city: "lagos",
    bloodType: "o+",
  },
  {
    id: 9,
    image:
      "https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png",
    firstName: "John",
    lastName: "Doe",
    state: "philly",
    city: "lagos",
    bloodType: "o+",
  },
  {
    id: 10,
    image:
      "https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png",
    firstName: "John",
    lastName: "Doe",
    state: "philly",
    city: "lagos",
    bloodType: "o+",
  },
  {
    id: 11,
    image:
      "https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png",
    firstName: "Johnny",
    lastName: "Doepp",
    state: "philly",
    city: "lagos",
    bloodType: "o+",
  },
  {
    id: 12,
    image:
      "https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png",
    firstName: "John",
    lastName: "Doe",
    state: "philly",
    city: "lagos",
    bloodType: "o+",
  },
  {
    id: 13,
    image:
      "https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png",
    firstName: "John",
    lastName: "Doe",
    state: "philly",
    city: "lagos",
    bloodType: "o+",
  },
  {
    id: 14,
    image:
      "https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png",
    firstName: "John",
    lastName: "Doe",
    state: "philly",
    city: "lagos",
    bloodType: "o+",
  },
  {
    id: 15,
    image:
      "https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png",
    firstName: "John",
    lastName: "Doe",
    state: "philly",
    city: "lagos",
    bloodType: "o+",
  },
  {
    id: 16,
    image:
      "https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png",
    firstName: "John",
    lastName: "Doe",
    state: "philly",
    city: "lagos",
    bloodType: "o+",
  },
  {
    id: 17,
    image:
      "https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png",
    firstName: "John",
    lastName: "Doe",
    state: "philly",
    city: "lagos",
    bloodType: "o+",
  },
  {
    id: 18,
    image:
      "https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png",
    firstName: "John",
    lastName: "Doe",
    state: "philly",
    city: "lagos",
    bloodType: "o+",
  },
  {
    id: 19,
    image:
      "https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png",
    firstName: "John",
    lastName: "Doe",
    state: "philly",
    city: "lagos",
    bloodType: "o+",
  },
];

const Item = ({ image, firstName, lastName, state, city, bloodType }) => (
  <View style={styles.donorWrap}>
    <View>
      <Image
        style={{ height: 100, width: 100 }}
        source={require("../../../assets/Avatar2.png")}
      />
    </View>

    <View style={styles.donorInfoWrap}>
      <View>
        <Text style={styles.donorName}>
          {firstName} {lastName}
        </Text>

        <Text style={styles.donorState}>{state}</Text>

        <Text style={styles.donorCity}>{city}</Text>
      </View>
      <View>
        <Text style={styles.donorBlood}>{bloodType}</Text>
      </View>
    </View>

    {/* style={styles.donorBloodWrap} */}
  </View>
);

export default function NeedBlood() {
  const [searchValue, setSearchValue] = useState("");
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
    <SafeAreaView style={styles.main}>
      <View style={{ backgroundColor: "#f6655F" }}>
        <Text style={styles.searchText}>Find Donors</Text>
        <View style={styles.searchWrap}>
          <Feather name="search" size={24} color="black" />
          <TextInput
            style={styles.input}
            clearButtonMode="always"
            autoCapitalize="none"
            autoCorrect={false}
            value={searchValue}
            onChangeText={setSearchValue}
            placeholder="Search with State, City or Bloodtype"
          />
        </View>
      </View>

      <View style={styles.donorsWrap}>
        {/* <Text style={styles.donorTitle}>Available Donors</Text> */}

        <FlatList
          data={donorList}
          renderItem={({ item }) => (
            <Item
              image={item.image}
              firstName={item.firstName}
              lastName={item.lastName}
              state={item.state}
              city={item.city}
              bloodType={item.bloodType}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  input: {
    width: "90%",
    fontSize: 20,
    marginLeft: 25,
    fontFamily: "poppinsLight",
  },
  searchWrap: {
    padding: 10,
    justifyContent: "space-evenly",
    margin: 15,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "95%",
    backgroundColor: "white",
    borderRadius: 30,
    marginBottom: 50,
    height: 60,
  },
  searchText: {
    color: "white",
    paddingLeft: 10,
    marginTop: 20,
    paddingRight: 10,
    fontSize: 22,
    textAlign: "center",
    fontFamily: "poppins",
  },
  donorsWrap: {
    height: 610,
    backgroundColor: "#f1908c1a",
    flex: 1,
    padding: 15,
  },
  donorWrap: {
    backgroundColor: "#f1908c1a",
    borderRadius: 15,
    marginBottom: 16,
    padding: 12,
    // marginTop: 16,
    display: "flex",

    alignItems: "center",
    flexDirection: "row",
  },
  donorTitle: {
    fontSize: 40,
    textAlign: "center",
    color: "#F6655F",
    fontFamily: "poppins",
  },
  donorInfoWrap: {
    display: "flex",
    // width: 180,
    marginLeft: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  donorName: {
    fontFamily: "poppins",
    fontSize: 24,
    color: "#434343",
  },
  donorState: {
    fontFamily: "poppinsReg",
    fontSize: 20,
    color: "grey",
  },
  donorCity: {
    fontFamily: "poppinsReg",
    fontSize: 20,
    color: "grey",
  },
  donorBloodWrap: {
    width: 120,
    height: 120,
    borderRadius: 100,
    borderColor: "#F1908C",
    borderWidth: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  donorBlood: {
    fontSize: 52,
    fontFamily: "poppins",
    color: "#F6655F",
  },
});
