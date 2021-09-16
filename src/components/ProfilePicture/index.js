import React from "react";
import { Image, View } from "react-native";
import { COLORS } from "../../Constants/COLORS";
import styles from "./style";

const ProfilePicture = ({ uri, size = 50, border = true }) => (
  <View
    style={[
      styles.container,
      { width: size + 6, height: size + 6, borderWidth: border ? 3 : 3, borderColor: border ? COLORS.primary : 'transparent' },
    ]}
  >
    <Image
      source={{ uri }}
      style={[styles.image, { height: size, width: size }]}
    />
  </View>
);

export default ProfilePicture;
