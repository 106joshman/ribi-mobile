import React, { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../screens/Home";
import NeedBlood from "../../screens/Needblood";
import Profile from "../../screens/Profile";
import { Fontisto, FontAwesome5, Feather } from "@expo/vector-icons";
import { Text } from "react-native";
import * as Font from "expo-font";
import Pending from "../Pending";
import Donated from "../Donated";
import UserDetails from "../userDetails";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const ProfileScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        screenOptions={{
          headerTitleStyle: {
            fontSize: 28,
            color: "#FFF",
            display: "none",
            fontFamily: "poppinsReg",
          },
        }}
        name="UserProfile"
        component={Profile}
      />
      <Stack.Screen name="UserInfo" component={UserDetails} />
      <Stack.Screen name="Pending" component={Pending} />
      <Stack.Screen name="Donated" component={Donated} />
    </Stack.Navigator>
  );
};

export default function Tabs() {
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
  // #AD9FA3, #606061
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#FFF",
        tabBarInactiveTintColor: "black",
        headerStyle: {
          height: 95,
          backgroundColor: "#F6655F",
        },
        tabBarStyle: {
          backgroundColor: "#F6655F",
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 18,
          fontFamily: "poppinsReg",
        },
        headerTitleStyle: {
          fontSize: 28,
          color: "#FFF",
          // display: "none",
          fontFamily: "poppinsReg",
        },
        headerTitleAlign: "center",
        headerStatusBarHeight: 35,
        headerTintColor: "black",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarAccessibilityLabel: "Home",
          tabBarIcon: ({ focused }) => (
            <Feather
              name="home"
              size={32}
              color={focused ? "white" : "black"}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Need Blood"
        component={NeedBlood}
        options={{
          tabBarIcon: ({ focused }) => (
            <Fontisto
              name="blood-drop"
              size={32}
              color={focused ? "white" : "black"}
            />
          ),
          tabBarAccessibilityLabel: "Need Blood",
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="user-alt"
              size={32}
              color={focused ? "white" : "black"}
            />
          ),
          tabBarAccessibilityLabel: "Profile",
        }}
      />
    </Tab.Navigator>
  );
}
//
