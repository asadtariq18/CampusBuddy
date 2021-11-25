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
import MenuList from "../../../components/MenuList";
import { COLORS } from "../../../Constants/COLORS";
import styles from "./style";

const MenuScreen = ({ route }) => {
  const cafe = route.params;
  console.log(cafe);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar showHideTransition backgroundColor={COLORS.primary} />
      <View
        style={{
          flexDirection: "row",
          alignSelf: "flex-start",
        }}
      >
        <Text style={styles.cafeName}> {cafe.name}</Text>
        <Text style={styles.rating}> {cafe.rating} </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignSelf: "flex-end",
          paddingVertical: 10
        }}
      >
        <Text style={styles.Button2}> Bucket </Text>
        <Text style={styles.Button2}> History </Text>
        <Text style={styles.Button2}> View Order </Text>
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
        <Text style={styles.headerText}> Menu </Text>
        <Text style={styles.text}> Tap item to add to bucket </Text>
        <MenuList />
      </View>
    </SafeAreaView>
  );
};

export default MenuScreen;
