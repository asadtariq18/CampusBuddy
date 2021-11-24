import React from "react";
import {
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  View,
} from "react-native";
import CafeList from "../../../components/CafeList";
import { COLORS } from "../../../Constants/COLORS";
import styles from "./style";

const FoodHomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          paddingBottom: 20,
          justifyContent: "space-evenly",
          alignItems: "flex-start",
        }}
      >
        <Text style={styles.Button2}> Cart </Text>
        <Text style={styles.Button2}> History </Text>
      </View>
      <View
        style={{
          flex: 1,
          width: "100%",
          justifyContent: "flex-start",
          alignItems: "center",
          backgroundColor: COLORS.background_dark,
          borderTopEndRadius: 60,
          borderTopStartRadius: 60,
        }}
      >
        <Text style={styles.headerText}> Select Cafe </Text>
        <CafeList />
        <Text style={styles.text}>
          {" "}
          Now you can order your food from university cafe through Campus Buddy{" "}
        </Text>
        <TouchableOpacity>
          <Text style={styles.Button2}> Food Home </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default FoodHomeScreen;
