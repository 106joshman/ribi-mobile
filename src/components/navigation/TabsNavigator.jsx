import React, { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../screens/Home";
import NeedBlood from "../../screens/Needblood";
import Profile from "../../screens/Profile";
import { Feather } from "@expo/vector-icons";
import { Text } from "react-native";
import * as Font from "expo-font";
import Pending from "../../screens/Profile/Pending";
import Donated from "../../screens/Profile/Donated";
import UserDetails from "../../screens/Profile/userDetails";
import ArticlePage from "../../screens/Home/articlePage";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home page"
        component={Home}
      />
      <Stack.Screen
        options={({ route }) => ({
          // title: route.params?.title,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#F6655F",
          },
          headerTitleStyle: {
            color: "#FFF",
            fontSize: 25,
            fontFamily: "poppinsReg",
          },
        })}
        name="Activities"
        component={ArticlePage}
      />
    </Stack.Navigator>
  );
};

const ProfileScreen = () => {
  return (
    <Stack.Navigator initialRouteName="User-Profile">
      <Stack.Screen
        options={{ headerShown: false }}
        name="User"
        component={Profile}
      />
      <Stack.Screen
        options={({ route }) => ({
          title: route.params?.title,
          headerTitleAlign: "center",

          headerStyle: {
            backgroundColor: "#F6655F",
          },
          headerTitleStyle: {
            color: "#FFF",
            fontSize: 25,
            fontFamily: "poppinsReg",
          },
        })}
        name="User Info"
        component={UserDetails}
      />
      <Stack.Screen
        options={({ route }) => ({
          title: route.params?.title,
          headerTitleAlign: "center",
          headerTintColor: "#FFF",
          headerStyle: {
            backgroundColor: "#F6655F",
          },
          headerTitleStyle: {
            fontSize: 25,
            fontFamily: "poppinsReg",
          },
        })}
        name="Pending"
        component={Pending}
      />
      <Stack.Screen
        options={({ route }) => ({
          title: route.params?.title,
          headerTitleAlign: "center",
          headerTintColor: "#FFF",
          headerStyle: {
            backgroundColor: "#F6655F",
          },
          headerTitleStyle: {
            fontSize: 25,
            fontFamily: "poppinsReg",
          },
        })}
        name="Donated"
        component={Donated}
      />
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
          height: 10,
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
          display: "none",
          fontFamily: "poppinsReg",
        },
        headerTitleAlign: "center",
        headerStatusBarHeight: 35,
        headerTintColor: "black",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
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
            <Feather
              name="droplet"
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
            <Feather
              name="user"
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
