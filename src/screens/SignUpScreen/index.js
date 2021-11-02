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
const auth = Firebase.auth();

const SignUpScreen = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isFemale, setIsFemale] = useState(false);
  const [isMale, setIsMale] = useState(false);
  const [gender, setGender] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid_FirstName, setIsValid_FirstName] = useState(false);
  const [isValid_LastName, setIsValid_LastName] = useState(false);
  const [isValid_Mail, setIsValid_Mail] = useState(false);
  const [isValid_Password, setIsValid_Password] = useState(false);
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

  const malePress = () => {
    setIsFemale(false);
    setIsMale(!isMale);
    setGender("Male");
  };

  const femalePress = () => {
    setIsMale(false);
    setIsFemale(!isFemale);
    setGender("Female");
  };

  const onChangeFirstName = (str) => {
    if (ValidateFirstName(str)) {
      setFirstName(str);
    }
  };
  const onChangeLastName = (str) => {
    if (ValidateLastName(str)) {
      setLastName(str);
    }
  };

  const onChangeMail = (str) => {
    if (ValidateMail(str)) {
      setMail(str.toLowerCase());
    }
  };

  const onChangePass = (str) => {
    if (ValidatePass(str)) {
      setPassword(str);
    }
  };

  const ValidateFirstName = (str) => {
    var hasNumber = /\d/;
    if (!hasNumber.test(str) && str !== "") {
      setFirstName(str);
      setIsValid_FirstName(true);
    } else {
      setIsValid_FirstName(false);
    }
  };

  const ValidateLastName = (str) => {
    var hasNumber = /\d/;
    if (!hasNumber.test(str) && str !== "") {
      setLastName(str);
      setIsValid_LastName(true);
    } else {
      setIsValid_LastName(false);
    }
  };

  const ValidateMail = (str) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(str).toLowerCase())) {
      setMail(str);
      setIsValid_Mail(true);
    } else {
      setIsValid_Mail(false);
    }
  };

  const ValidatePass = (str) => {
    if (str.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)) {
      setPassword(str);
      setIsValid_Password(true);
    } else {
      setIsValid_Password(false);
    }
  };

  const onSignUpPress = async () => {
    try {
      if (mail !== "" && password !== "") {
        await auth.createUserWithEmailAndPassword(mail, password);
        ToastAndroid.showWithGravity(
          "Your account has been created",
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM
        );
        Database.storeUserData(firstName, lastName, mail.toLowerCase(), gender);
        navigation.navigate("SetUpProfile", { gender, mail });
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
          onFocus={() => setOnFocus(true)}
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
              color: isValid_Password ? COLORS.primary : "gray",
            }}
          />
        </View>
        <TouchableOpacity onPress={onSignUpPress}>
          {isValid_Mail &&
          isValid_FirstName &&
          isValid_LastName &&
          isValid_Password &&
          (isFemale || isMale) ? (
            <View style={styles.buttonView}>
              <Text style={styles.button2}>Sign up</Text>
            </View>
          ) : (
            <View style={styles.buttonView}>
              <Text style={styles.button1}>Sign up</Text>
            </View>
          )}
        </TouchableOpacity>

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
