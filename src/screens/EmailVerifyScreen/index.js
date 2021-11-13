import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
  StatusBar,
  ToastAndroid,
} from "react-native";
import { Header } from "native-base";
import { useNavigation } from "@react-navigation/native";
import Firebase from "../../config/Firebase";
import styles from "./style";
import { COLORS } from "../../Constants/COLORS";
import { setMailSent, setLabel } from "../../Redux/VerifyEmail/actions";
import { useDispatch, useSelector } from "react-redux";

const auth = Firebase.auth();

const EmailVerifyScreen = ({ route }) => {
  const dispatch = useDispatch();
  const mail = route.params.mail.toLowerCase();
  // const gender = route.params.gender;

  const mailSent = useSelector((state)=> state.emailVerify.mailSent);
  const label = useSelector((state)=> state.emailVerify.label);
  const navigation = useNavigation();

  // useEffect(() => {
  //   console.log("useEffect");
  //   setEmailVerified(auth.currentUser.emailVerified);
  //   console.log(emailVerified);
  //   if (emailVerified) {
  //     console.log(emailVerified);
  //     ToastAndroid.showWithGravityAndOffset(
  //       "Email Verified",
  //       ToastAndroid.SHORT,
  //       ToastAndroid.CENTER,
  //       25,
  //       50
  //     );
  //     navigation.navigate("SetUpProfile", { mail, gender });
  //   }
  // });

  const onVerifyPress = () => {
    auth.currentUser.sendEmailVerification().then(() => {
      dispatch(setMailSent(true));
      dispatch(setLabel(`Check your email and follow the link we just sent to verify.`));
    })
    ToastAndroid.showWithGravityAndOffset(
      "Email Sent.",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
      25,
      50
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header style={styles.header}>
        <StatusBar backgroundColor={COLORS.background_dark} />
        <View style={styles.header}>
          <Text style={styles.headerText}>Verify Email</Text>
        </View>
      </Header>
      <View>
        <Image
          style={styles.image}
          source={require("../../Constants/emailsent.png")}
        />
        <Text style={styles.text1}>{label}</Text>
        <Text style={styles.text2}>{mail}</Text>
        {!mailSent ? (
          <TouchableOpacity onPress={onVerifyPress}>
            <View style={styles.buttonView}>
              <Text style={styles.button1}>Verify email</Text>
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SignIn");
            }}
          >
            <View style={styles.buttonView}>
              <Text style={styles.button1}>Go to Login</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};
export default EmailVerifyScreen;
