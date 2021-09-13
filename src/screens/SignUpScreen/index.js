import React from "react";
import { SafeAreaView, Text } from "react-native";
import { COLORS } from "../../Constants/COLORS";
import BottomTabNavigator from "../../router/BottomTabNavigator/bottomTabNavigator";

const SignUpScreen = () => (
  <SafeAreaView
    style={{
      backgroundColor: COLORS.background_dark,
      justifyContent: "center",
      height: "100%",
    }}
  >
    <Text style={{ textAlign: "center", fontSize: 40, color: "#ffffff" }}>
      Sign Up
    </Text>
  </SafeAreaView>
);

export default SignUpScreen;
