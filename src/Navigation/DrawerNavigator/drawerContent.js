import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
} from "react-native-paper";
import { ToastAndroid } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon5 from "react-native-vector-icons/FontAwesome5";
import { COLORS } from "../../Constants/COLORS";
import { useNavigation } from "@react-navigation/native";
import Firebase from "../../config/Firebase";
const auth = Firebase.auth();
import Database from "../../Database/database";

export function DrawerContent(props) {
  const navigation = useNavigation();

  const onSignOutPress = async () => {
    try {
      await auth.signOut();
      navigation.navigate("SignIn");
      ToastAndroid.showWithGravity(
        "Signed Out",
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM
      );
    } catch (error) {
      ToastAndroid.showWithGravity(
        error,
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM
      );
    }
  };
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.background_dark }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Avatar.Image
                source={{
                  uri: `${Database.getCurrentUser().profile_picture}`,
                }}
                size={50}
              />
              <View style={{ marginLeft: 15, flexDirection: "column" }}>
                <Title style={styles.title}>
                  {Database.getCurrentUser().name}
                </Title>
                <Caption style={styles.caption}>
                  {Database.getCurrentUser().regNo}
                </Caption>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  {Database.getCurrentUser().friends_count}
                </Paragraph>
                <Caption style={styles.caption}>Friends</Caption>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  {"         "}
                  {Database.getCurrentUser().popularity}
                </Paragraph>
                <Caption style={styles.caption}>Popularity</Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="home-outline" color={COLORS.icon} size={size} />
              )}
              label="Feed"
              inactiveTintColor={COLORS.font}
              onPress={() => {
                props.navigation.navigate("Feed");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="food" color={COLORS.icon} size={size} />
              )}
              label="Food Order"
              inactiveTintColor={COLORS.font}
              onPress={() => {
                props.navigation.navigate("Food Order");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon5
                  name="hands-helping"
                  color={COLORS.icon}
                  size={size - 5}
                />
              )}
              label="Donation"
              inactiveTintColor={COLORS.font}
              onPress={() => {
                props.navigation.navigate("Donation");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="map" color={COLORS.icon} size={size} />
              )}
              label="Map"
              inactiveTintColor={COLORS.font}
              onPress={() => {
                props.navigation.navigate("Map");
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      {/* <TouchableRipple onPress={() => {}}>
        <View style={styles.preference}>
          <Text style={{ color: COLORS.font }}>Dark Theme</Text>
          <View pointerEvents="none">
            <Switch value={paperTheme.dark} />
          </View>
        </View>
      </TouchableRipple> */}
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="account-cog-outline" color={COLORS.icon} size={size} />
          )}
          label="Account Setting"
          inactiveTintColor={COLORS.font}
          onPress={() => {
            props.navigation.navigate("Setting");
          }}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={COLORS.icon} size={size} />
          )}
          label="Sign Out"
          inactiveTintColor={COLORS.font}
          onPress={onSignOutPress}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
    paddingBottom: 10,
    borderBottomEndRadius: 20,
    borderTopStartRadius: 20,
    backgroundColor: COLORS.primary,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
    color: COLORS.font,
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    color: COLORS.font,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: COLORS.secondary,
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
