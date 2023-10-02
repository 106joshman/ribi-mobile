import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Login from "../../screens/Auth/Login";
import Register from "../../screens/Auth/Signup";
import Onboarding from "../../screens/Auth/Index";

export default function AuthStack() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}
