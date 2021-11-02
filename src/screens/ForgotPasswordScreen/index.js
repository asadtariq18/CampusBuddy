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

const ForgotPasswordScreen = () => {
  const [mail, setMail] = useState("");
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

  const onSignUpPress = () => {
    navigation.navigate("SignUp");
  };
  const onLoginPress = () => {
    navigation.navigate("SignIn");
  };

  return (
    <SafeAreaView style={styles.container}>
      {!onFocus ? (
        <Header style={styles.header}>
          <StatusBar backgroundColor={COLORS.background_dark} />
          <View style={styles.header}>
            <Text style={styles.headerText}>Reset Password</Text>
          </View>
        </Header>
      ) : null}
      <View>
        <Image
          style={styles.image}
          source={require("../../Constants/logo.png")}
        />
        <Text style={styles.text1}>
          Enter the email address associated with your account to reset your
          password.
        </Text>
        <TextInput
          placeholder="University Mail"
          placeholderTextColor={COLORS.font_secondary}
          selectionColor={COLORS.primary}
          style={styles.textInput}
          onChangeText={(value) => onChangeMail(value.trim())}
        ></TextInput>

        <TouchableOpacity onPress={onSendCodePress}>
          {isEmpty ? (
            <View style={styles.buttonView}>
              <Text style={styles.button1}>Send Code</Text>
            </View>
          ) : (
            <View style={styles.buttonView}>
              <Text style={styles.button2}>Send Code</Text>
            </View>
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={onLoginPress}>
          <Text style={styles.button3}>Go back to Log In</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};
export default ForgotPasswordScreen;
