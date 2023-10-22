// import { StatusBar } from "expo-status-bar";
import { StatusBar, StyleSheet, View } from "react-native";
import Tabs from "./src/components/navigation/TabsNavigator";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./src/components/navigation/AuthStack";
import SplashScreen from "./src/components/splashScreen";
import Register from "./src/screens/Auth/Signup";
import Login from "./src/screens/Auth/Login";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <View style={styles.container}>
        <Tabs />
        {/* <AuthStack /> */}
        {/* <SplashScreen /> */}
        {/* <Register /> */}
        {/* <Login/> */}
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
