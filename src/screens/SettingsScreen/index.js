import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
  ToastAndroid,
  Keyboard,
} from "react-native";
import { Header, Left, Body, Icon, Title, Button, Right } from "native-base";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";
import { COLORS } from "../../Constants/COLORS";
import { getAuth, deleteUser } from "firebase/auth";

const SettingScreen = () => {
  const navigation = useNavigation();
  // const auth = getAuth();
  // const user = auth.currentUser;

  const deleteAccount = () => {
  //   try {
  //     deleteUser(user).then(() => {
  //       // User deleted.
  //       ToastAndroid.show("User Deleted", ToastAndroid.SHORT);
  //     })
  //   } catch (error) {
  //     ToastAndroid.show(error.message, ToastAndroid.SHORT);
  //   }
 };

  return (
    <SafeAreaView style={styles.container}>
      <Header style={styles.header}>
        <StatusBar backgroundColor={COLORS.background_dark} />
        <Left>
          <Button transparent onPress={() => navigation.openDrawer()}>
            <Icon name="ios-menu" />
          </Button>
        </Left>
        <Body style={styles.header}>
          <Title style={styles.headerText}>Account Setting</Title>
        </Body>
      </Header>
      <TouchableWithoutFeedback onPress={deleteAccount}>
        <Text style={styles.Button1}>Delete Account</Text>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={deleteAccount}>
        <Text style={styles.Button1}>Push Notification</Text>
      </TouchableWithoutFeedback>

    </SafeAreaView>
  );
};
export default SettingScreen;
