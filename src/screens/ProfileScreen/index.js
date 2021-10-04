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

const ProfileScreen = () => {
  const [refreshing, setRefreshing] = React.useState(false);
  const [updated, setUpdated] = React.useState(false);

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    if (updated) {
      try {
        setRefreshing(false);
        ToastAndroid.show("Updated", ToastAndroid.SHORT);
      } catch (error) {
        console.error(error);
      }
    } else {
      ToastAndroid.show("No more updates", ToastAndroid.SHORT);
      setRefreshing(false);
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
                uri: `${Database.getCurrentUser().profile_picture}`,
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
            {Database.getCurrentUser().name}
          </Text>
          <Text
            style={[
              styles.text,
              { color: COLORS.font_secondary, fontSize: 14 },
            ]}
          >
            {Database.getCurrentUser().regNo}
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
              {Database.getCurrentUser().posts_count}
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
              {Database.getCurrentUser().friends_count}
            </Text>
            <Text style={[styles.text, styles.subText]}>Friends</Text>
          </View>
          <View style={styles.statsBox}>
            <Text style={[styles.text, { fontSize: 24 }]}>
              {Database.getCurrentUser().popularity}
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
          {Database.getCurrentUser().posts_count === 0 ? (
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
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View style={styles.mediaImageContainer}>
                <Image
                  source={{
                    uri: `${
                      Database.getCurrentUser().posts.post_sp18bcs032_1.image
                    }`,
                  }}
                  style={styles.image}
                  resizeMode="cover"
                />
              </View>
            </ScrollView>
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
