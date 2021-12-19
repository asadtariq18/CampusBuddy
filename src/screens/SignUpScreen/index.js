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
import { Icon } from "native-base";
import { Header } from "native-base";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";
import { COLORS } from "../../Constants/COLORS";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Database from "../../Database/database";
import Firebase from "../../config/Firebase";
import {
  setFirstName,
  setLastName,
  setIsFemale,
  setIsMale,
  setGender,
  setMail,
  setPassword,
  setIsValidFirstName,
  setIsValidLastName,
  setIsValidMail,
  setIsValidPassword,
  setOnFocus,
} from "../../Redux/SignUp/actions";
import { useDispatch, useSelector } from "react-redux";
const auth = Firebase.auth();

const SignUpScreen = () => {
  const dispatch = useDispatch();
  const firstName = useSelector((state) => state.signup.firstName);
  const lastName = useSelector((state) => state.signup.lastName);
  const isFemale = useSelector((state) => state.signup.isFemale);
  const isMale = useSelector((state) => state.signup.isMale);
  const gender = useSelector((state) => state.signup.gender);
  const mail = useSelector((state) => state.signup.mail);
  const password = useSelector((state) => state.signup.password);
  const isValidFirstName = useSelector(
    (state) => state.signup.isValidFirstName
  );
  const isValidLastName = useSelector((state) => state.signup.isValidLastName);
  const isValidMail = useSelector((state) => state.signup.isValidMail);
  const isValidPassword = useSelector((state) => state.signup.isValidPassword);
  const onFocus = useSelector((state) => state.signup.onFocus);

  const navigation = useNavigation();

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      dispatch(setOnFocus(true));
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      dispatch(setOnFocus(false));
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const malePress = () => {
    dispatch(setIsFemale(false));
    dispatch(setIsMale(!isMale));
    dispatch(setGender("Male"));
  };

  const femalePress = () => {
    dispatch(setIsMale(false));
    dispatch(setIsFemale(!isFemale));
    dispatch(setGender("Female"));
    // setIsMale(false);
    // setIsFemale(!isFemale);
    // setGender("Female");
  };

  const onChangeFirstName = (str) => {
    if (ValidateFirstName(str)) {
      dispatch(setFirstName(str));
    }
  };
  const onChangeLastName = (str) => {
    if (ValidateLastName(str)) {
      dispatch(setLastName(str));
    }
  };

  const onChangeMail = (str) => {
    if (ValidateMail(str)) {
      dispatch(setMail(str.toLowerCase()));
    }
  };

  const onChangePass = (str) => {
    if (ValidatePass(str)) {
      dispatch(setPassword(str));
    }
  };

  const ValidateFirstName = (str) => {
    var hasNumber = /\d/;
    var re = /[A-Za-z][A-Za-z]+/;
    if (!hasNumber.test(str) && re.test(str) && str !== "") {
      dispatch(setFirstName(str));
      dispatch(setIsValidFirstName(true));
    } else {
      dispatch(setIsValidFirstName(false));
    }
  };

  const ValidateLastName = (str) => {
    var hasNumber = /\d/;
    var re = /[A-Za-z][A-Za-z]+/;
    if (!hasNumber.test(str) && re.test(str) && str !== "") {
      dispatch(setLastName(str));
      dispatch(setIsValidLastName(true));
    } else {
      dispatch(setIsValidLastName(false));
    }
  };

  const ValidateMail = (str) => {
    const re =
      /[SP|FA|sp|fa|Sp|Fa][0-9][0-9]-[B|b][a-zA-Z][a-zA-Z]-\d\d\d@student\.comsats\.edu\.pk/;
    if (re.test(String(str).toLowerCase())) {
      dispatch(setMail(str));
      dispatch(setIsValidMail(true));
    } else {
      dispatch(setIsValidMail(false));
    }
  };

  const ValidatePass = (str) => {
    if (str.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)) {
      dispatch(setPassword(str));
      dispatch(setIsValidPassword(true));
    } else {
      dispatch(setIsValidPassword(false));
    }
  };

  const onSignUpPress = async () => {
    try {
      if (mail !== "" && password !== "") {
        await auth.createUserWithEmailAndPassword(mail, password).then(() => {
          navigation.navigate("Email Verification Screen", { mail });
          Database.storeUserData(
            firstName,
            lastName,
            mail.toLowerCase(),
            gender
          );
          ToastAndroid.showWithGravity(
            "Your account has been created",
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM
          );
        });
      }
    } catch (error) {
      console.log(error.message);
      if (
        error.message ===
        "The email address is already in use by another account."
      ) {
        ToastAndroid.showWithGravity(
          error.message,
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM
        );
      } else {
        ToastAndroid.showWithGravity(
          "An error occurred while signing up, please try again",
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM
        );
      }
    }
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
            <Text style={styles.headerText}>Create your account</Text>
          </View>
        </Header>
      ) : null}
      <View>
        <Image
          style={styles.image}
          source={require("../../Constants/logo.png")}
        />
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <TouchableWithoutFeedback onPress={malePress}>
            {!isMale ? (
              <View style={styles.buttonView}>
                <Text style={styles.button5}>Male</Text>
              </View>
            ) : (
              <View style={styles.buttonView}>
                <Text style={styles.button4}>Male</Text>
              </View>
            )}
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={femalePress}>
            {!isFemale ? (
              <View style={styles.buttonView}>
                <Text style={styles.button5}>Female</Text>
              </View>
            ) : (
              <View style={styles.buttonView}>
                <Text style={styles.button4}>Female</Text>
              </View>
            )}
          </TouchableWithoutFeedback>
        </View>
        <TextInput
          placeholder="First name"
          placeholderTextColor={COLORS.font_secondary}
          selectionColor={COLORS.primary}
          style={styles.textInput}
          onChangeText={(value) => onChangeFirstName(value.trim())}
          onFocus={() => dispatch(setOnFocus(true))}
        ></TextInput>
        <TextInput
          placeholder="Last Name"
          placeholderTextColor={COLORS.font_secondary}
          selectionColor={COLORS.primary}
          style={styles.textInput}
          onChangeText={(value) => onChangeLastName(value.trim())}
        ></TextInput>
        <TextInput
          placeholder="University Mail"
          placeholderTextColor={COLORS.font_secondary}
          selectionColor={COLORS.primary}
          style={styles.textInput}
          onChangeText={(value) => onChangeMail(value.trim().toLowerCase())}
          keyboardType={"email-address"}
        ></TextInput>
        <View style={styles.passwordInput}>
          <TextInput
            placeholder="Password"
            placeholderTextColor={COLORS.font_secondary}
            selectionColor={COLORS.primary}
            style={{ color: COLORS.font, width: 300 }}
            onChangeText={(value) => onChangePass(value.trim())}
            secureTextEntry
          ></TextInput>
          <Icon
            name="checkmark-circle"
            style={{
              fontSize: 25,
              color: isValidPassword ? COLORS.primary : "gray",
            }}
          />
        </View>
        {isValidMail &&
        isValidFirstName &&
        isValidLastName &&
        isValidPassword &&
        (isFemale || isMale) ? (
          <TouchableOpacity onPress={onSignUpPress}>
            <View style={styles.buttonView}>
              <Text style={styles.button2}>Sign up</Text>
            </View>
          </TouchableOpacity>
        ) : (
          <View style={styles.buttonView}>
            <Text style={styles.button1}>Sign up</Text>
          </View>
        )}

        <Text style={styles.text}>Already have account?</Text>
        <TouchableOpacity onPress={onLoginPress}>
          <Text style={styles.button3}>Log in</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.text2}>By Asad Tariq and Alina Nazir</Text>
    </SafeAreaView>
  );
};
export default SignUpScreen;
