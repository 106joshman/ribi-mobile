import React, { useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../screens/Home";
import NeedBlood from "../../screens/Needblood";
import Profile from "../../screens/Profile";
import { Foundation, Fontisto, FontAwesome5 } from "@expo/vector-icons";
import ActionBarImage from "../../components/actionBarImage";
import { Text } from "react-native";
import * as Font from "expo-font";

const Tab = createBottomTabNavigator();

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

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#FFF",
        tabBarInactiveTintColor: "grey",
        headerStyle: {
          height: 95,
          backgroundColor: "#FFF",
        },
        tabBarStyle: {
          backgroundColor: "#F6655F",
          height: 55,
        },
        tabBarLabelStyle: {
          fontSize: 18,
          fontFamily: "poppinsReg",
        },
        headerTitleStyle: {
          fontSize: 28,
          color: "#F6655F",
          fontFamily: "poppinsReg",
        },
        headerTitleAlign: "center",
        headerStatusBarHeight: 35,
        headerLeft: () => <ActionBarImage />,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarAccessibilityLabel: "Home",
          tabBarIcon: ({ focused }) => (
            <Foundation
              name="home"
              size={32}
              color={focused ? "#FFF" : "grey"}
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
              color={focused ? "#FFF" : "grey"}
            />
          ),
          tabBarAccessibilityLabel: "Need Blood",
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="user-alt"
              size={32}
              color={focused ? "#FFF" : "grey"}
            />
          ),
          tabBarAccessibilityLabel: "Profile",
        }}
      />
    </Tab.Navigator>
  );
}
