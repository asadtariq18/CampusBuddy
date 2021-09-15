import React from "react";
import { Text, View, SafeAreaView, Image, ScrollView, RefreshControl, ToastAndroid } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import styles from "./style";
import { COLORS } from "../../Constants/COLORS";

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
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={{ alignSelf: "center" }}>
          <View style={styles.profileImage}>
            <Image
              source={{
                uri: "https://cdn.izoomyou.app/aHR0cHM6Ly9zY29udGVudC1pYWQzLTEuY2RuaW5zdGFncmFtLmNvbS92L3Q1MS4yODg1LTE5LzE5ODI5MTgzMF8xMDgyNTg5MzE0ODI3NjJfNjQ4MzU1MDU1MDk3MTkyMTIyN19uLmpwZz9fbmNfaHQ9c2NvbnRlbnQtaWFkMy0xLmNkbmluc3RhZ3JhbS5jb20mX25jX29oYz1vdndaQmpjMkh1TUFYX2xRMFZUJmVkbT1BRUY4dFlZQkFBQUEmY2NiPTctNCZvaD1hMzQxZTkzZWU5YzY5NGJhMTQ4ZGU1MGZjYWU3OGQyYiZvZT02MTNEMzYwOSZfbmNfc2lkPWE5NTEzZA==",
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
            Aleena
          </Text>
          <Text
            style={[
              styles.text,
              { color: COLORS.font_secondary, fontSize: 14 },
            ]}
          >
            SP18-BCS-023
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
            <Text style={[styles.text, { fontSize: 24 }]}>1</Text>
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
            <Text style={[styles.text, { fontSize: 24 }]}>45</Text>
            <Text style={[styles.text, styles.subText]}>Friends</Text>
          </View>
          <View style={styles.statsBox}>
            <Text style={[styles.text, { fontSize: 24 }]}>207</Text>
            <Text style={[styles.text, styles.subText]}>Popularity</Text>
          </View>
        </View>

        <View style={{ marginTop: 32 }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.mediaImageContainer}>
              <Image
                source={{
                  uri: "https://images.theconversation.com/files/254131/original/file-20190116-163274-1u0u5re.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=600&h=400&fit=crop&dpr=1",
                }}
                style={styles.image}
                resizeMode="cover"
              />
            </View>
          </ScrollView>
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
