import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import LoadingScreen from "../screens/LoadingScreen";
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import PasswordVerificationScreen from "../screens/PasswordVerifyScreen";
import EmailVerificationScreen from "../screens/EmailVerifyScreen";
import AppStack from "../Navigation/AppStack"
const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="SignIn">
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Forgot Password"
        component={ForgotPasswordScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Password Verification Screen"
        component={PasswordVerificationScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AppStack"
        component={AppStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Email Verification Screen"
        component={EmailVerificationScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Loading"
        component={LoadingScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
export default AuthStack;