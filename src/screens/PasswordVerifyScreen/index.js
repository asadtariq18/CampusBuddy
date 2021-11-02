import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  ToastAndroid,
  StatusBar,
  Keyboard,
} from "react-native";
import { Header } from "native-base";
import { useNavigation } from "@react-navigation/native";

import styles from "./style";
import { COLORS } from "../../Constants/COLORS";
import * as firebase from "firebase";
import Firebase from "../../config/Firebase";
import Database from "../../Database/database";
import AsyncStorage from "@react-native-async-storage/async-storage";

const auth = Firebase.auth();

const SignInScreen = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmpty, setIsEmpty] = useState(true);
  const [onFocus, setOnFocus] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setOnFocus(true);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setOnFocus(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const onChangeMail = (input1) => {
    setMail(input1);
    if (input1 !== "") {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  };
  const onSendCodePress = async () => {
    try {
      if (mail !== "") {
        await auth.sendPasswordResetEmail(mail);
        ToastAndroid.showWithGravityAndOffset(
          "Sending email...",
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
          25,
          50
        );
        navigation.navigate("Verification Screen");
      }
    } catch (error) {
      {
        error.message ===
        "There is no user record corresponding to this identifier. The user may have been deleted."
          ? ToastAndroid.showWithGravityAndOffset(
              "This Email address is not registered",
              ToastAndroid.SHORT,
              ToastAndroid.CENTER,
              25,
              50
            )
          : ToastAndroid.showWithGravityAndOffset(
              "An error occurred while sending email",
              ToastAndroid.SHORT,
              ToastAndroid.CENTER,
              25,
              50
            );
      }
    }
  };

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
export default SignInScreen;
