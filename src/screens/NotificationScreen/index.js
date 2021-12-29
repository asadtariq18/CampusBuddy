import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  ScrollView,
  StatusBar,
  RefreshControl,
  ToastAndroid,
} from "react-native";
import { Header, Text } from "native-base";
import NotificationList from "../../components/NotificationList";
import styles from "./style";
import { COLORS } from "../../Constants/COLORS";
import database from "../../Database/database";

const NotificationScreen = () => {
  const [refreshing, setRefreshing] = React.useState(false);
  const [notifications, setNotifications] = useState({});
  useEffect(() => {
    setNotifications(database.getNotifications());
  }, []);
  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    try {
      setNotifications(database.getNotifications());
      setRefreshing(false);
    } catch (error) {
      setRefreshing(false);
      console.error(error);
    }
  }, [refreshing]);
  if (notifications) {
    return (
      <ScrollView
        refreshControl={
          <RefreshControl
            progressBackgroundColor={COLORS.background_dark}
            colors={[COLORS.primary]}
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
        style={styles.container}
      >
        <Header style={styles.header}>
          <StatusBar backgroundColor={COLORS.background_dark} />
          <View style={styles.header}>
            <Text style={styles.headerText}>Notifications</Text>
          </View>
        </Header>
        <RefreshControl
          progressBackgroundColor={COLORS.background_dark}
          colors={[COLORS.primary]}
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
        {notifications ? (
          <NotificationList notifications={notifications} />
        ) : (
          <Text
            style={{
              fontSize: 18,
              color: COLORS.font_secondary,
              marginTop: 30,
              alignSelf: "center",
            }}
          >
            {" "}
            No Notification{" "}
          </Text>
        )}
      </ScrollView>
    );
  } else {
    return (
      <ScrollView
        refreshControl={
          <RefreshControl
            progressBackgroundColor={COLORS.background_dark}
            colors={[COLORS.primary]}
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
        style={styles.container}
      >
        <Header style={styles.header}>
          <StatusBar backgroundColor={COLORS.background_dark} />
          <View style={styles.header}>
            <Text style={styles.headerText}>Notifications</Text>
          </View>
        </Header>
        <RefreshControl
          progressBackgroundColor={COLORS.background_dark}
          colors={[COLORS.primary]}
          refreshing={refreshing}
          onRefresh={onRefresh}
        />

        <Text
          style={{
            fontSize: 18,
            color: COLORS.font_secondary,
            marginTop: 30,
            alignSelf: "center",
          }}
        >
          {" "}
          No Notification{" "}
        </Text>
      </ScrollView>
    );
  }
};

export default NotificationScreen;
