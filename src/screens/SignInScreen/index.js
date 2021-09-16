import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  ToastAndroid,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";
import { COLORS } from "../../Constants/COLORS";

const SignInScreen = () => {
  const [regNo, setRegNo] = useState("");
  const [password, setPassword] = useState("");
  const [isEmpty, setIsEmpty] = useState(true);

  const navigation = useNavigation();
  const onChangeReg = (input1) => {
    setRegNo(input1);
    if (input1 !== "" && password !== "") {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  };

  const onChangePass = (input2) => {
    setPassword(input2);
    if (regNo !== "" && input2 !== "") {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  };

  const onLoginPress = () => {
    if (regNo.toUpperCase() === "ASAD" && password === "1234") {
      ToastAndroid.showWithGravityAndOffset(
        "Logging in...",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
        25,
        50
      );
      navigation.navigate("Home");
      ToastAndroid.showWithGravityAndOffset(
        "Logged in as "+ regNo,
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
        25,
        50
      );
    } else if (regNo === "" && password === "") {
      ToastAndroid.show("Fields empty", ToastAndroid.SHORT);
    } else {
      ToastAndroid.show("Wrong Credentials, try again", ToastAndroid.SHORT);
    }
  };

  const onSignUpPress = () => {
    navigation.navigate("SignUp");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={require("../../Constants/logo.png")}
        />
        <TextInput
          placeholder="Registration Number/ University Mail"
          placeholderTextColor={COLORS.font_secondary}
          selectionColor={COLORS.primary}
          style={styles.textInput}
          onChangeText={(value) => onChangeReg(value)}
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
