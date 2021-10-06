import React, { useEffect } from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  RefreshControl,
  ToastAndroid,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./style";
import { COLORS } from "../../Constants/COLORS";
import Database from "../../Database/database";
import TimelinePosts from "../../components/TimelinePosts";

const ProfileScreen = () => {
  const [refreshing, setRefreshing] = React.useState(false);
  const [user, setUser] = React.useState(Database.getCurrentUser());
  const [posts, setPosts] = React.useState(user.posts);

  useEffect(() => {
    setUser(Database.getCurrentUser());
    setPosts(Database.getUpdatedUserData(user.mail).posts);
  }, []);

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    try {
      setUser(Database.getCurrentUser());
      setPosts(Database.getUpdatedUserData(user.mail).posts);
      setRefreshing(false);
      ToastAndroid.show("Updated", ToastAndroid.SHORT);
    } catch (error) {
      ToastAndroid.show(error.message, ToastAndroid.SHORT);
    }
  }, [refreshing]);
  return (
    <SafeAreaView style={styles.container}>
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
                uri: `${user.profile_picture}`,
              }}
              style={styles.image}
            />
          </View>
          <View style={styles.add}>
            <Ionicons
              name="ios-add"
              size={25}
              color={COLORS.icon}
              style={{ marginTop: 5, marginLeft: 2 }}
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
            {user.regNo}
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
            minHeight: 200,
            minWidth: 400,
          }}
        >
          {user.posts_count === 0 ? (
            <Text
              style={[
                styles.text,
                {
                  fontSize: 24,
                  color: COLORS.font_secondary,
                  marginTop: 50,
                },
              ]}
            >
              {" "}
              NO POSTS{" "}
            </Text>
          ) : (
            <TimelinePosts posts={posts} />
          )}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};
export default ProfileScreen;
