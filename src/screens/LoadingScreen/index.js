import React from "react";
import { SafeAreaView, Text } from "react-native";
import { COLORS } from "../../Constants/COLORS";

const LoadingScreen = () => (
  <SafeAreaView
    style={{
      backgroundColor: COLORS.background_dark,
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
    }}
  >
    <Text style={{ textAlign: "center", fontSize: 40, color: "#ffffff" }}>
      Loading
    </Text>
  </SafeAreaView>
);

export default LoadingScreen;
