import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { View, Image, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import ADIcon from "react-native-vector-icons/AntDesign";
import HomeScreen from "../screens/HomeScreen";
import StoryScreen from "../screens/StoryScreen";
import logo from "../assets/images/logo.png";
import Drawer from "./DrawerNavigator/drawerNavigator";
import ChatScreen from "../screens/ChatScreen";
import FoodOrderScreen from "../screens/FoodOrderScreen";
import styles from "./style";
import SearchScreen from "../screens/SearchScreen";
import NotificationScreen from "../screens/NotificationScreen";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../Constants/COLORS";

const HomeStack = createStackNavigator();
const HomeRoutes = () => {
  const navigation = useNavigation();

  const chatPress = () => {
    navigation.navigate("ChatScreen");
  };
  const drawerPress = () => {
    navigation.openDrawer();
  };
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Campus Buddy",
          headerTitleAlign: "center",
          headerStyle: {
            paddingTop: 10,
            height: 50,
            backgroundColor: COLORS.background_dark,
          },
          headerTitle: () => (
            <View style={styles.container}>
              <Text style={styles.headerTitle}>Campus Buddy</Text>
            </View>
          ),
          headerRight: () => (
            <View>
              <Ionicons
                name="chatbox"
                size={25}
                color={COLORS.font}
                onPress={chatPress}
              />
            </View>
          ),
          headerRightContainerStyle: {
            marginTop: 10,
            marginRight: 10,
          },
          headerLeftContainerStyle: {
            marginTop: 10,
            marginLeft: 10,
          },
          headerLeft: () => (
            <View>
              <Ionicons
                name="ios-menu"
                size={25}
                color={COLORS.font}
                onPress={drawerPress}
              />
            </View>
          ),
        }}
      />
      <HomeStack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{
          title: "Chat",
          headerTitleAlign: "center",
          headerTintColor: COLORS.background_dark,
          headerStyle: {
            backgroundColor: COLORS.background_dark,
            
          },

          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
            color: COLORS.font
          },
        }}
      />
    </HomeStack.Navigator>
  );
};
export default HomeRoutes;
