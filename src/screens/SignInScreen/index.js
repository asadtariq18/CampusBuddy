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
  ActivityIndicator
} from "react-native";
import { Header } from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

import styles from "./style";
import { COLORS } from "../../Constants/COLORS";
import { Icon } from "native-base";
import Firebase from "../../config/Firebase";
import Database from "../../Database/database";
import database from "../../Database/database";
import {
  isEmptyChange,
  onFocusChange,
  reverseHidePass,
  updateMail,
  updatePass,
  setLoggingIn
} from "../../Redux/SignIn/actions";
import { useDispatch, useSelector } from "react-redux";
import store from "../../Redux/store";

const auth = Firebase.auth();

const SignInScreen = () => {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  const mail = useSelector((state) => state.login.mail);
  const password = useSelector((state) => state.login.password);
  const isEmpty = useSelector((state) => state.login.isEmpty);
  const onFocus = useSelector((state) => state.login.onFocus);
  const hidePass = useSelector((state) => state.login.hidePass);
  const loggingIn = useSelector((state) => state.login.loggingIn);
  const navigation = useNavigation();

  useEffect(() => {
    readUser();
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      dispatch(onFocusChange(true));
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      dispatch(onFocusChange(false));
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  async function readUser() {
    const user = await AsyncStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  }

  const onChangeMail = (input1) => {
    dispatch(updateMail(input1));
    if (input1 !== "" && password !== "") {
      dispatch(isEmptyChange(false));
    } else {
      dispatch(isEmptyChange(true));
    }
  };

  const onChangePass = (input2) => {
    dispatch(updatePass(input2));
    if (mail !== "" && input2 !== "") {
      dispatch(isEmptyChange(false));
    } else {
      dispatch(isEmptyChange(true));
    }
  };

  const onLoginPress = async () => {
    try {
      if (mail !== "" && password !== "") {
        dispatch(setLoggingIn(true));
        await auth.signInWithEmailAndPassword(mail, password);
        if (auth.currentUser.emailVerified === false) {
          ToastAndroid.showWithGravityAndOffset(
            "Verify Your email first.",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
            25,
            50
          );
          navigation.navigate("Email Verification Screen", { mail });
        } else {
          Database.getUpdatedUserData(mail);
          const user = database.getCurrentUser();
          await AsyncStorage.setItem("user", JSON.stringify(user));
          setUser(user);
          dispatch(setLoggingIn(false));
          ToastAndroid.showWithGravityAndOffset(
                      "Logged in",
                      ToastAndroid.SHORT,
                      ToastAndroid.CENTER,
                      25,
                      50
                    );
          navigation.getParent.navigate('AppStack')
        }
      }
    } catch (error) {
      if (
        error.message ===
        "There is no user record corresponding to this identifier. The user may have been deleted."
      ) {
        dispatch(setLoggingIn(false));
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
        dispatch(setLoggingIn(false));
        ToastAndroid.showWithGravityAndOffset(
          "Wrong credentials",
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
          25,
          50
        );
      } else {
        dispatch(setLoggingIn(false));
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
          keyboardType="email-address"
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
            onPress={() => dispatch(reverseHidePass(!hidePass))}
          />
        </View>
        <TouchableOpacity onPress={onLoginPress}>
          {isEmpty ? (
            <View style={styles.buttonView}>
              <Text style={styles.button1}>Log in</Text>
            </View>
          ) : (
            <View style={styles.buttonView}>
              {loggingIn ? 
              <ActivityIndicator size='large' color={COLORS.primary} />
              :
              <Text style={styles.button2}>Log in</Text>
            }
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
