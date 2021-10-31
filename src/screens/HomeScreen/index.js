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
import posts from "../../Data/PostData/posts";

const HomeScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [user, setUser] = useState(Database.getCurrentUser());
  //const [posts, setPosts] = useState(Database.getUserPosts(user.mail));

  const navigation = useNavigation();

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

    const drawerPress = () => {
      navigation.openDrawer();
    };
  return (
    <SafeAreaView style={styles.container}>
      <Header style={styles.header}>
        <StatusBar backgroundColor={COLORS.background_dark} />
        <Left>
          <Button transparent onPress={drawerPress}>
            <Icon name="ios-menu" />
          </Button>
        </Left>
        <Body>
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
