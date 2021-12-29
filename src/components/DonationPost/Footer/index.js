import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import moment from "moment";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";


const Footer = ({ post }) => {
  const navigation = useNavigation()
  const handleDonate = () => {
    navigation.navigate("DonateScreen", {receiverTitle: post.accountTitle, accountNumber: post.accountNumber, bankName: post.bankName})
  };

  return (
    <View style={styles.container}>
      <View keyboardShouldPersistTaps="handled">
        <View style={styles.left}>
          <Text style={styles.timestamp}>
            {moment(post.timestamp, "YYYYMMDDHHmmss").fromNow()}
          </Text>
        </View>
        <View style={styles.centeredView}>
          <TouchableWithoutFeedback onPress={handleDonate}>
            <View style={styles.buttonView}>
              <Text style={styles.footer_button}>Donate</Text>
            </View>
          </TouchableWithoutFeedback>
          <Text style={styles.text}>using Stripe</Text>
        </View>
      </View>
    </View>
  );
};
export default Footer;
