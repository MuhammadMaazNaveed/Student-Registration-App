import React from "react";
// LIBRARY FOR NAVIGATION
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import {CredentialsContext} from './../components/CredentialContext.js';
// SCREENS
import Adminlogin from "../screens/Adminlogin";
import UserDetails from "../screens/UserDetails";

const AuthNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Adminlogin">
        <Stack.Screen
          name="Adminlogin"
          options={{ headerShown: false }}
          component={Adminlogin}
        />
        <Stack.Screen name="UserDetails" component={UserDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigator;
