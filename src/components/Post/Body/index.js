import React, { useState } from "react";
import { Image, View, ActivityIndicator, Text } from "react-native";
import { COLORS } from "../../../Constants/COLORS";
import styles from "./style";

const Body = ({ image }) => {
  const [loading, setLoading] = useState(false);
  return (
    <View style={styles.view}>
      <Image
        source={{ uri: image }}
        style={styles.image}
        onLoadEnd={() => {
          setLoading(false);
        }}
        onLoadStart={() => {
          setLoading(true);
        }}
      ></Image>
      {loading ? <Text style={styles.text}> Loading </Text> : null}
      <ActivityIndicator
        style={styles.activityIndicator}
        color={COLORS.primary}
        size={"large"}
        animating={loading}
      />
    </View>
  );
};

export default Body;
