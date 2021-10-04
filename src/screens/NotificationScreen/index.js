import React from "react";
import {
  SafeAreaView,
  View,
  ScrollView,
  StatusBar,
} from "react-native";
import { Header, Text } from "native-base";
import NotificationList from "../../components/NotificationList";
import styles from "./style";
import { COLORS } from "../../Constants/COLORS";

const NotificationScreen = () => (
  <SafeAreaView style={styles.container}>
    <Header style={styles.header}>
      <StatusBar backgroundColor={COLORS.background_dark} />
      <View style={styles.header}>
        <Text style={styles.headerText}>Notification</Text>
      </View>
    </Header>
      <NotificationList />
  </SafeAreaView>
);

export default NotificationScreen;
