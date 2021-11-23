import React from "react";
import {
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS } from "../../../Constants/COLORS";
import styles from "./style";

const FoodHomeScreen = () => (
  <SafeAreaView style={styles.container}>
    <Image
      style={styles.image}
      source={require("../../../Constants/food6.jpg")}
    />
    <View
      style={{
        flex: 1,
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: 40,
        backgroundColor: COLORS.background_dark,
        borderTopEndRadius: 100,
        borderTopStartRadius: 100,
      }}
    >
      <Image
        style={styles.image2}
        source={require("../../../Constants/food4.jpg")}
      />
      <Text style={styles.headerText}> Cafe Food Order </Text>
      <Text style={styles.text}>
        {" "}
        Now you can order your food from university cafe through Campus Buddy{" "}
      </Text>
      <TouchableOpacity>
        <Text style={styles.Button2}> Get Started </Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
);

export default FoodHomeScreen;
