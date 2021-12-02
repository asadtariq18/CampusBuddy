import React, { useEffect } from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  RefreshControl,
  ToastAndroid,
  StatusBar,
} from "react-native";
import { Header, Left, Body, Icon, Title, Button, Right } from "native-base";
import styles from "./style";
import { COLORS } from "../../Constants/COLORS";
import Database from "../../Database/database";
import TimelinePosts from "../../components/TimelinePosts";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { setRefreshing, setPosts, setUser } from "../../Redux/Profile/actions";
import database from "../../Database/database";

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const refreshing = useSelector((state) => state.profile.refreshing);
  const user = useSelector((state) => state.profile.user);
  const posts = useSelector((state) => state.profile.posts);

  useEffect(() => {
    dispatch(setUser(Database.getCurrentUser()));
    dispatch(setPosts(Database.getPosts()));
  }, []);

  const onRefresh = React.useCallback(async () => {
    dispatch(setRefreshing(true));
    try {
      dispatch(setUser(Database.getCurrentUser()));
      dispatch(setPosts(Database.getPosts()));
      dispatch(setRefreshing(false));
      ToastAndroid.show("Updated", ToastAndroid.SHORT);
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
          <Title style={styles.headerText}>Profile</Title>
        </Body>
        <Right>
          <Button
            transparent
            onPress={() => navigation.navigate("EditProfile")}
          >
            <Text style={styles.text}>Edit</Text>
          </Button>
        </Right>
      </Header>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            progressBackgroundColor={COLORS.background_dark}
            colors={[COLORS.primary]}
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        <View style={{ alignSelf: "center" }}>
          <View style={styles.profileImage}>
            <Image
              source={{
                uri: `${user.avatar}`,
              }}
              style={styles.image}
            />
          </View>
        </View>

        <View style={styles.infoContainer}>
          <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>
            {user.name}
          </Text>
          <Text
            style={[
              styles.text,
              { color: COLORS.font_secondary, fontSize: 14 },
            ]}
          >
            {user.userID.toUpperCase()}
          </Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statsBox}>
            <Text style={[styles.text, { fontSize: 24 }]}>
              {user.posts_count}
            </Text>
            <Text style={[styles.text, styles.text]}>Posts</Text>
          </View>
          <View
            style={[
              styles.statsBox,
              {
                borderColor: COLORS.icon,
                borderLeftWidth: 1,
                borderRightWidth: 1,
              },
            ]}
          >
            <Text style={[styles.text, { fontSize: 24 }]}>
              {user.friends_count}
            </Text>
            <Text style={[styles.text, styles.text]}>Friends</Text>
          </View>
          <View style={styles.statsBox}>
            <Text style={[styles.text, { fontSize: 24 }]}>
              {user.popularity}
            </Text>
            <Text style={[styles.text, styles.text]}>Popularity</Text>
          </View>
        </View>

        <ScrollView
          contentContainerStyle={{
            marginTop: 20,
            backgroundColor: COLORS.secondary,
            justifyContent: "center",
            borderRadius: 10,
            minWidth: 400,
          }}
        >
          <TimelinePosts posts={posts} user={user} />
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};
export default ProfileScreen;
