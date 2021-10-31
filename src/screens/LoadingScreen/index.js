import React from "react";
import { SafeAreaView, Image } from "react-native";
import { COLORS } from "../../Constants/COLORS";
import styles from "./style";


const LoadingScreen = () => (
  <SafeAreaView
    style={{
      backgroundColor: COLORS.background_dark,
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
    }}
  >
    <Image
      style={styles.image}
      source={{
        uri: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b6e0b072897469.5bf6e79950d23.gif",
      }}
    />
  </SafeAreaView>
);

export default LoadingScreen;
