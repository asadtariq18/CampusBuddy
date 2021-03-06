import React from "react";
import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Foundation from "react-native-vector-icons/Foundation";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SearchScreen from "../../screens/SearchScreen";
import CreatePostScreen from "../../screens/CreatePostScreen";
import NotificationScreen from "../../screens/NotificationScreen";
import ProfileScreen from "../../screens/ProfileScreen";
import styles from "./style";
import { COLORS } from "../../Constants/COLORS";
import HomeScreen from "../../screens/HomeScreen";

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Home") {
            return <Ionicons name="home" size={size} color={color} />;
          }
          if (route.name === "Search") {
            return <Feather name="search" size={size} color={color} />;
          }
          if (route.name === "Create Post") {
            return <Entypo name="squared-plus" size={size} color={color} />;
          }
          if (route.name === "Notification") {
            return <Ionicons name="notifications" size={size} color={color} />;
          }
          if (route.name === "Profile") {
            return (
              <MaterialCommunityIcons
                name="account-box"
                size={size}
                color={color}
              />
            );
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: COLORS.primary,
        inactiveTintColor: COLORS.font,
        showLabel: false,
        style: styles.bottomTab,
        keyboardHidesTabBar: true,
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Create Post" component={CreatePostScreen} />
      <Tab.Screen name="Notification" component={NotificationScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
export default BottomTabNavigator;
