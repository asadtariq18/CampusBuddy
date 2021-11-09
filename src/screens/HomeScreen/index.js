import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  RefreshControl,
  ToastAndroid,
  Text,
} from "react-native";

import { Header, Left, Body, Icon, Title, Button, Right } from "native-base";
import Feed from "../../components/Feed";
import styles from "./style";
import { COLORS } from "../../Constants/COLORS";
import Database from "../../Database/database";
import { useNavigation } from "@react-navigation/core";

const HomeScreen = () => {
  const navigation = useNavigation();

  const [refreshing, setRefreshing] = useState(false);
  const [user, setUser] = React.useState(Database.getCurrentUser());
  const [posts, setPosts] = React.useState(Database.getPosts());
  useEffect(() => {
    setUser(Database.getCurrentUser());
    setPosts(Database.getPosts());
    onRefresh();
  }, []);

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    try {
      setUser(Database.getCurrentUser());
      setPosts(Database.getPosts());
      setRefreshing(false);
     // ToastAndroid.show("Updated", ToastAndroid.SHORT);
    } catch (error) {
      ToastAndroid.show(error.message, ToastAndroid.SHORT);
    }
  }, [refreshing]);

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
          <Title style={styles.headerText}>Campus Buddy</Title>
        </Body>
        <Right>
          <Button transparent onPress={() => navigation.navigate("ChatScreen")}>
            <Icon name="md-chatbubbles" />
          </Button>
        </Right>
      </Header>
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
                textAlign: "center",
                fontSize: 24,
                color: COLORS.font_secondary,
                marginTop: 50,
                justifyContent: "center",
                alignItems: "center",
              },
            ]}
          >
            {" "}
            Welcome to Campus Buddy, {user.name}{" "}
          </Text>
        ) : (
          <Feed posts={posts} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
