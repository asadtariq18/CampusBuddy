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
  TouchableOpacity,
} from "react-native";
import { Header, Left, Body, Icon, Title, Button, Right } from "native-base";
import styles from "./style";
import { COLORS } from "../../Constants/COLORS";
import Database from "../../Database/database";
import TimelinePosts from "../../components/TimelinePosts";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import {
  setRefreshing,
  setPosts,
  setRequestSent,
  setRequestReceived,
} from "../../Redux/UserProfile/actions";
import database from "../../Database/database";

const UserProfileScreen = ({ route }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const refreshing = useSelector((state) => state.userProfile.refreshing);
  const { user } = route.params;
  const posts = useSelector((state) => state.userProfile.posts);
  const requestSent = useSelector((state) => state.userProfile.requestSent);
const requestReceived = useSelector((state) => state.userProfile.requestReceived);
  useEffect(() => {
    dispatch(setPosts(Database.getPosts()));
  }, []);

  const onRefresh = React.useCallback(async () => {
    dispatch(setRefreshing(true));
    try {
      dispatch(setPosts(Database.getPosts()));
      dispatch(setRefreshing(false));
      ToastAndroid.show("Updated", ToastAndroid.SHORT);
    } catch (error) {
      ToastAndroid.show(error.message, ToastAndroid.SHORT);
    }
  }, [refreshing]);

  const addFriendHandle = () => {
    database.sendFriendRequest(user.userID);
    dispatch(setRequestSent(true));
    ToastAndroid.show("Request Sent", ToastAndroid.SHORT);
  };
  const CancelRequestHandle = () => {
    //database.cancelFriendRequest(user.userID);
    dispatch(setRequestSent(false));
    ToastAndroid.show("Request Cancelled", ToastAndroid.SHORT);
  };
    const acceptRequestHandle = () => {
    //database.cancelFriendRequest(user.userID);
    ToastAndroid.show("Accepting Request", ToastAndroid.SHORT);
  };
  const messageHandle = () => {
    //database.cancelFriendRequest(user.userID);
    ToastAndroid.show("Opening Inbox", ToastAndroid.SHORT);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header style={styles.header}>
        <StatusBar backgroundColor={COLORS.background_dark} />
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon type="FontAwesome" name="arrow-circle-left" />
          </Button>
        </Left>
        <Body style={styles.header}>
          <Title style={styles.headerText}>{user.name}</Title>
        </Body>
        <Right></Right>
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
          {database.isFriend(user.userID) ? (
            <TouchableOpacity onPress={messageHandle}>
              <Text style={[styles.button, { fontSize: 20 }]}>Message</Text>
            </TouchableOpacity>
          ) : (
            [
              !requestSent ? (
                <TouchableOpacity onPress={addFriendHandle}>
                  <Text style={[styles.button, { fontSize: 20 }]}>
                    Add Friend
                  </Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={CancelRequestHandle}>
                  <Text
                    style={[
                      styles.button,
                      { fontSize: 20, backgroundColor: COLORS.tertiary },
                    ]}
                  >
                    Cancel Request
                  </Text>
                </TouchableOpacity>
              ),
              requestReceived ? (
                <TouchableOpacity onPress={acceptRequestHandle}>
                  <Text
                    style={[
                      styles.button,
                      { fontSize: 20, backgroundColor: COLORS.secondary2 },
                    ]}
                  >
                    Accept Request
                  </Text>
                </TouchableOpacity>
              ) : null,
            ]
          )}
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
        {database.isFriend(user.userID) ? (
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
        ) : (
          <View style={{ alignItems: "center", marginTop: 50 }}>
            <Text style={styles.headerText}> Private </Text>

            <Image
              style={styles.image2}
              source={require("../../Constants/profileLock.png")}
            />
            <Text style={styles.headerText}> Add friend to see posts </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
export default UserProfileScreen;
