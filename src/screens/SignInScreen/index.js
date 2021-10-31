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
    if (input1 !== "" && password !== "") {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  };

  const onChangePass = (input2) => {
    setPassword(input2);
    if (mail !== "" && input2 !== "") {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  };

  async function setUser() {
    const _id = mail;
    const user = { _id };
    await AsyncStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  }
  const onLoginPress = async () => {
    try {
      if (mail !== "" && password !== "") {
        await auth.signInWithEmailAndPassword(mail, password);
        ToastAndroid.showWithGravityAndOffset(
          "Logging in...",
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
          25,
          50
        );

        Database.getUpdatedUserData(mail);
        setUser();
        navigation.navigate("AppStack");
      }
    } catch (error) {
      {
        error.message ===
        "The password is invalid or the user does not have a password."
          ? ToastAndroid.showWithGravityAndOffset(
              "Wrong credentials",
              ToastAndroid.SHORT,
              ToastAndroid.CENTER,
              25,
              50
            )
          : ToastAndroid.showWithGravityAndOffset(
              error.message,
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
  return (
    <SafeAreaView style={styles.container}>
      {!onFocus ? (
        <Header style={styles.header}>
          <StatusBar backgroundColor={COLORS.background_dark} />
          <View style={styles.header}>
            <Text style={styles.headerText}>Login</Text>
          </View>
        </Header>
      ) : null}
      <View>
        <Image
          style={styles.image}
          source={require("../../Constants/logo.png")}
        />
        <TextInput
          placeholder="University Mail"
          placeholderTextColor={COLORS.font_secondary}
          selectionColor={COLORS.primary}
          style={styles.textInput}
          onChangeText={(value) => onChangeMail(value.trim())}
        ></TextInput>

        <TextInput
          placeholder="Password"
          placeholderTextColor={COLORS.font_secondary}
          selectionColor={COLORS.primary}
          style={styles.textInput}
          secureTextEntry={true}
          onChangeText={(value) => onChangePass(value)}
        ></TextInput>
        <TouchableOpacity onPress={onLoginPress}>
          {isEmpty ? (
            <View style={styles.buttonView}>
              <Text style={styles.button1}>Log in</Text>
            </View>
          ) : (
            <View style={styles.buttonView}>
              <Text style={styles.button2}>Log in</Text>
            </View>
          )}
        </TouchableOpacity>

        <Text style={styles.text}>Don't have account?</Text>
        <TouchableOpacity onPress={onSignUpPress}>
          <Text style={styles.button3}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.text2}>By Asad Tariq and Alina Nazir</Text>
    </SafeAreaView>
  );
};
export default SignInScreen;
