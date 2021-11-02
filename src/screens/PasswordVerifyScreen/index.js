import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
  StatusBar,
} from "react-native";
import { Header } from "native-base";
import { useNavigation } from "@react-navigation/native";

import styles from "./style";
import { COLORS } from "../../Constants/COLORS";

const PasswordVerifyScreen = () => {
  const navigation = useNavigation();

  const onLoginPress = () => {
    navigation.navigate("SignIn");
  };

  return (
    <SafeAreaView style={styles.container}>
        <Header style={styles.header}>
          <StatusBar backgroundColor={COLORS.background_dark} />
          <View style={styles.header}>
            <Text style={styles.headerText}>Email Sent</Text>
          </View>
        </Header>
      <View>
        <Image
          style={styles.image}
          source={require("../../Constants/emailsent.png")}
        />
        <Text style={styles.text1}>
          Check your email and follow the link we just sent you to change your
          password.
        </Text>
        <TouchableOpacity onPress={onLoginPress}>
            <View style={styles.buttonView}>
              <Text style={styles.button2}>Go to Login</Text>
            </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default PasswordVerifyScreen;
