import React from "react";
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
  const[user, setUser] = React.useState(Database.getCurrentUser());
  const [posts, setPosts] = React.useState(Database.getUserPosts(user.mail));

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    try {
      setUser(Database.getCurrentUser());
      setPosts(Database.getUserPosts(user.mail));
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
          <Text
            style={[
              styles.text,
              { color: COLORS.font_secondary, fontSize: 14 },
            ]}
          >
            Student
          </Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statsBox}>
            <Text style={[styles.text, { fontSize: 24 }]}>
              {user.posts_count}
            </Text>
            <Text style={[styles.text, styles.subText]}>Posts</Text>
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
            <Text style={[styles.text, styles.subText]}>Friends</Text>
          </View>
          <View style={styles.statsBox}>
            <Text style={[styles.text, { fontSize: 24 }]}>
              {user.popularity}
            </Text>
            <Text style={[styles.text, styles.subText]}>Popularity</Text>
          </View>
        </View>

        <View
          style={{
            marginTop: 32,
            backgroundColor: COLORS.secondary,
            borderRadius: 20,
            minHeight: 100,
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
                  marginStart: 155,
                  marginTop: 30,
                },
              ]}
            >
              {" "}
              NO POSTS{" "}
            </Text>
          ) : (
               <TimelinePosts />
              // <View style={styles.mediaImageContainer}>
              //   <Image
              //     source={{
              //       uri: `${posts.post_sp18bcs032_1.image}`,
              //     }}
              //     style={styles.image}
              //     resizeMode="cover"
              //   />
              // </View>
          )}
        </View>
        <Text style={[styles.subText, styles.recent]}>Recent Activity</Text>
        <View style={{ alignItems: "center" }}>
          <View style={styles.recentItem}>
            <View style={styles.activityIndicator} />
            <View style={{ width: 250 }}>
              <Text
                style={[
                  styles.text,
                  { color: COLORS.font_secondary, fontWeight: "300" },
                ]}
              >
                Liked <Text style={{ fontWeight: "400" }}>Izmah</Text> and{" "}
                <Text style={{ fontWeight: "400" }}>Atizaz</Text>
              </Text>
            </View>
          </View>

          <View style={styles.recentItem}>
            <View style={styles.activityIndicator} />
            <View style={{ width: 250 }}>
              <Text
                style={[
                  styles.text,
                  { color: COLORS.font_secondary, fontWeight: "300" },
                ]}
              >
                Started Connection with{" "}
                <Text style={{ fontWeight: "400" }}>Asad</Text>
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default ProfileScreen;
