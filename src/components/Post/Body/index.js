import React from "react";
import { Image, View } from "react-native";
import styles from "./style";

const Body = ({ image }) => {
  return (
    <View style={styles.view}>
      <Image source={{ uri: image }} style={styles.image} />
    </View>
  );
};

export default Body;
