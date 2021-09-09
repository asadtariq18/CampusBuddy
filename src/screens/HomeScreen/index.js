import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import Feed from "../../components/Feed";
import styles from "./style";
import {LinearGradient} from "expo-linear-gradient";
import { COLORS } from "../../Constants/COLORS";

const HomeScreen = () => (
  <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.background_dark} />
      <Feed />
  </SafeAreaView>
);

export default HomeScreen;
