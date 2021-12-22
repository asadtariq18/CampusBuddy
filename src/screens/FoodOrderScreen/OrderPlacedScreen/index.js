import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
  StatusBar,
  ToastAndroid,
} from "react-native";
import { Header } from "native-base";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";
import { COLORS } from "../../../Constants/COLORS";
import { useDispatch, useSelector } from "react-redux";

const OrderPlacedScreen = ({ route }) => {
  const dispatch = useDispatch();

  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("FoodHome");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.primary} />
      <View style={{ justifyContent: "center", alignItems: "center", marginTop: 30 }}>
        <View style={{ marginTop: 10 }}>
          <Text style={styles.headerText}>Order Placed</Text>
        </View>
        <Image
          style={styles.image}
          source={require("../../../Constants/orderPlaced.png")}
        />
        <Text style={styles.text1}>Your food is on the way</Text>

        <TouchableOpacity onPress={handlePress}>
          <View style={styles.buttonView}>
            <Text style={styles.button1}>Go to Home</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default OrderPlacedScreen;
