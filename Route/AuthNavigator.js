import React from "react";
// LIBRARY FOR NAVIGATION
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import {CredentialsContext} from './../components/CredentialContext.js';
// SCREENS
import Register from "../screens/Register";
import Signup from "../screens/Signup";
import Signin from "../screens/Signin";
import Index from "../screens/Index";
import Home from "../screens/Home";
import StudentForm from "../screens/StudentForm";
import About from "../screens/About";

const AuthNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="startup">
        <Stack.Screen name="startup" options={{ headerShown: false }}>
          {(props) => <Index {...props} pageName={"startup"} />}
        </Stack.Screen>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="StudentForm" component={StudentForm} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigator;
