import React from "react";
import { View, SafeAreaView, StatusBar } from "react-native";
import Feed from "../../components/Feed";
import styles from "./style";
import { COLORS } from "../../Constants/COLORS";

const HomeScreen = () => (
  
  <SafeAreaView style={styles.container}>
    <StatusBar showHideTransition backgroundColor={COLORS.background_dark} />
    <Feed />
  </SafeAreaView>
);

export default HomeScreen;
