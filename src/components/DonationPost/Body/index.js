import React, { useState } from "react";
import {
  Image,
  View,
  ActivityIndicator,
  Text,
  TouchableOpacity,
  Clipboard,
  ToastAndroid,
} from "react-native";
import { COLORS } from "../../../Constants/COLORS";
import styles from "./style";

const Body = ({ post }) => {
  const onCopyPress = () => {
    Clipboard.setString(post.accountNumber);
    ToastAndroid.show("Account number copied", ToastAndroid.SHORT);
  };
  return (
    <View style={styles.view}>
      <Text style={styles.text1}>{post.accountTitle} </Text>
      <Text style={styles.text}> {post.bankName} </Text>
      <View style={styles.right}>
        <Text style={styles.text}> {post.accountNumber} </Text>
        <TouchableOpacity onPress={onCopyPress}>
          <Text style={styles.button}> Copy </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Body;
