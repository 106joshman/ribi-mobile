// import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Tabs from "./src/components/navigation/TabsNavigator";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./src/components/navigation/AuthStack";
import SplashScreen from "./src/components/splashScreen";

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        {/* <Tabs /> */}
        <AuthStack />
        {/* <SplashScreen /> */}
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
