import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  RefreshControl,
  ToastAndroid,
  Text,
} from "react-native";
import Feed from "../../components/Feed";
import styles from "./style";
import { COLORS } from "../../Constants/COLORS";
import Database from "../../Database/database";

const HomeScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [user, setUser] = useState(Database.getCurrentUser());

  useEffect(() => {
    setUser(Database.getCurrentUser());
  }, []);
  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    try {
      setUser(Database.getCurrentUser());
      setRefreshing(false);
      ToastAndroid.show("Updated", ToastAndroid.SHORT);
    } catch (error) {
      ToastAndroid.show(error.message, ToastAndroid.SHORT);
    }
  }, [refreshing]);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl
            progressBackgroundColor={COLORS.background_dark}
            colors={[COLORS.primary]}
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        <StatusBar
          showHideTransition
          backgroundColor={COLORS.background_dark}
        />
        {user.posts_count === 0 ? (
          <Text
            style={[
              {
                textAlign: 'center',
                fontSize: 24,
                color: COLORS.font_secondary,
                marginTop: 50,
                justifyContent: "center",
                alignItems: "center"
              },
            ]}
          >
            {" "}
            Welcome to Campus Buddy, {user.name} {" "}
          </Text>
        ) : (
          <Feed posts={user.posts} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
