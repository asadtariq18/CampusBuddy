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
import { Icon } from "native-base";
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
  const [hidePass, setHidePass] = useState(true);
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
      if (
        error.message ===
        "There is no user record corresponding to this identifier. The user may have been deleted."
      ) {
        ToastAndroid.showWithGravityAndOffset(
          "This email address is not registered",
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
          25,
          50
        );
      } else if (
        error.message ===
        "The password is invalid or the user does not have a password."
      ) {
        ToastAndroid.showWithGravityAndOffset(
          "Wrong credentials",
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
          25,
          50
        );
      } else {
        ToastAndroid.showWithGravityAndOffset(
          "An error occurred",
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
  const onForgotPasswordPress = () => {
    navigation.navigate("Forgot Password");
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

        <View style={styles.passwordInput}>
          <TextInput
            placeholder="Password"
            placeholderTextColor={COLORS.font_secondary}
            selectionColor={COLORS.primary}
            style={{ color: COLORS.font, width: 300 }}
            onChangeText={(value) => onChangePass(value.trim())}
            secureTextEntry={hidePass}
          ></TextInput>
          <Icon
            name="eye"
            style={{
              fontSize: 25,
              color: password === "" ? "black" : COLORS.font,
            }}
            onPress={() => setHidePass(!hidePass)}
          />
        </View>
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
        <TouchableOpacity onPress={onForgotPasswordPress}>
          <Text style={styles.button3}>Forgot Password?</Text>
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
