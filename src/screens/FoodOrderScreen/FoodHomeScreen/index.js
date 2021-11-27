import React from "react";
import {
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  View,
  ScrollView,
  StatusBar,
} from "react-native";
import CafeList from "../../../components/CafeList";
import { COLORS } from "../../../Constants/COLORS";
import styles from "./style";

const FoodHomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar showHideTransition backgroundColor={COLORS.primary} />
      <View
        style={{
          flexDirection: "row",
          alignSelf: "flex-start",
        }}
      >
        <Text style={styles.Header}> Food Buddy</Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignSelf: "flex-end",
          paddingVertical: 10,
        }}
      >
        <Text style={styles.Button2}> View Order </Text>
        <Text style={styles.Button2}> History </Text>
      </View>
      <View
        style={{
          flex: 1,
          width: "100%",
          alignItems: "center",
          backgroundColor: COLORS.tertiary,
          borderTopEndRadius: 60,
          borderTopStartRadius: 60,
        }}
      >
        <Text style={styles.headerText}> Select Cafe </Text>

        <CafeList />
      </View>
    </SafeAreaView>
  );
};

export default FoodHomeScreen;
