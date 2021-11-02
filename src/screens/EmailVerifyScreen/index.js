import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  StatusBar,
  ToastAndroid,
} from "react-native";
import { Header } from "native-base";
import { useNavigation } from "@react-navigation/native";
import Firebase from "../../config/Firebase";
import styles from "./style";
import { COLORS } from "../../Constants/COLORS";

const auth = Firebase.auth();

const EmailVerifyScreen = ({ route }) => {
  const mail = route.params.mail;
  const gender = route.params.gender;
  const [emailVerified, setEmailVerified] = useState(
    auth.currentUser.emailVerified
  );
  const [mailSent, setMailSent] = useState(false);
  const [label, setLabel] = useState(
    "Verify your email address to get registered"
  );
  const navigation = useNavigation();

  useEffect(() => {
    console.log("useEffect");
    setEmailVerified(auth.currentUser.emailVerified);
    console.log(emailVerified);
    if (emailVerified) {
      console.log(emailVerified);
      ToastAndroid.showWithGravityAndOffset(
        "Email Verified",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
        25,
        50
      );
      navigation.navigate("SetUpProfile", { mail, gender });
    }
  });

  const onVerifyPress = () => {
    auth.currentUser.sendEmailVerification().then(() => {
      setMailSent(true);
      setLabel(`Check your email and follow the link we just sent to verify.`);
    });
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
          <TouchableWithoutFeedback>
            <View style={styles.buttonView}>
              <Text style={styles.button2}>Email Sent</Text>
            </View>
          </TouchableWithoutFeedback>
        )}
      </View>
    </SafeAreaView>
  );
};
export default EmailVerifyScreen;
