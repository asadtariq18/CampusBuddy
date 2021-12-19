import React, { useState } from "react";
import { ActivityIndicator, Image, View } from "react-native";
import { COLORS } from "../../Constants/COLORS";
import styles from "./style";

const ProfilePicture = ({
  uri,
  size = 50,
  border = true,
  borderColor = COLORS.primary,
}) => {
  const [loading, setLoading] = useState(false)
  return(
  <View
    style={[
      styles.container,
      {
        width: size + 6,
        height: size + 6,
        borderWidth: border ? 3 : 3,
        borderColor: border ? borderColor : "transparent",
      },
    ]}
  >
    <Image
      source={{ uri }}
      style={[styles.image, { height: size, width: size }]}
      onLoadStart={() => {
        setLoading(true);
      }}
      onLoadStart={() => {
        setLoading(false);
      }}
    />
    <ActivityIndicator
      style={styles.activityIndicator}
      size={30}
      color={COLORS.primary}
      animating={loading}
    />
  </View>
)};

export default ProfilePicture;
