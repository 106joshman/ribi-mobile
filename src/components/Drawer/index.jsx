import React, { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import * as Font from "expo-font";
import { Image, Text } from "react-native";

import Tabs from "../Tabs";

import About from "../../screens/About";
import Contact from "../../screens/Contact";
import Home from "../../screens/Home";
import ActionBarImage from "../actionBarImage";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const HomeScreen = () => {
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
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Profile" component={Tabs} />
    </Stack.Navigator>
  );
};

export default function Drawers() {
  return (
    <Drawer.Navigator
      screenOptions={{
        overlayColor: "grey",
        drawerStatusBarAnimation: "slide",
        keyboardDismissMode: "none",
        headerStyle: {
          backgroundColor: "#F6655F", //Set Header color
        },
        headerTintColor: "#FFF", //Set Header text color
        headerTitleAlign: "center", //Set Header text to center
        headerTitleStyle: {
          fontSize: 28,
          fontFamily: "poppinsReg",
        },
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="About Ribi" component={About} />
      <Drawer.Screen name="Contact us" component={Contact} />
    </Drawer.Navigator>
  );
}
