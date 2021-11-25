import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from "./BottomTabNavigator/bottomTabNavigator";
import StoryScreen from "../screens/StoryScreen";
import EditProfileScreen from "../screens/EditProfileScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ChatScreen from "../screens/ChatScreen";
import InboxScreen from "../screens/InboxScreen";
import ViewPostScreen from "../screens/ViewPostScreen";
import DonateScreen from "../screens/DonationScreen/DonateScreen";
import ApplyDonationScreen from "../screens/DonationScreen/ApplyDonationScreen";
import GetStartedScreen from "../screens/FoodOrderScreen/GetStartedScreen"
import FoodHomeScreen from "../screens/FoodOrderScreen/FoodHomeScreen";
import { COLORS } from "../Constants/COLORS";
import DrawerNavigator from "./DrawerNavigator/drawerNavigator";
import MenuScreen from "../screens/FoodOrderScreen/MenuScreen";

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="Feed">
      <Stack.Screen
        name={"Feed"}
        component={DrawerNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="StoryScreen"
        component={StoryScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="InboxScreen"
        component={InboxScreen}
        options={({ route }) => ({
          title: route.params.name,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: COLORS.background_dark,
          },
          headerTintColor: COLORS.font,
          headerTitleStyle: {
            color: COLORS.font,
            fontWeight: "bold",
          },
        })}
      />
      <Stack.Screen
        name="ViewPost"
        component={ViewPostScreen}
        options={{
          title: "View Post",
          headerTitleAlign: "center",
          headerTintColor: COLORS.font,
          headerStyle: {
            backgroundColor: COLORS.background_dark,
          },

          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
            color: COLORS.font,
          },
        }}
      />
      <Stack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{
          title: "Chat",
          headerTitleAlign: "center",
          headerTintColor: COLORS.font,
          headerStyle: {
            backgroundColor: COLORS.background_dark,
          },

          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
            color: COLORS.font,
          },
        }}
      />

      <Stack.Screen
        name="ApplyDonationScreen"
        component={ApplyDonationScreen}
        options={{
          title: "Apply for donation",
          headerTitleAlign: "center",
          headerTintColor: COLORS.font,
          headerStyle: {
            backgroundColor: COLORS.background_dark,
          },

          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
            color: COLORS.font,
          },
        }}
      />

      <Stack.Screen
        name="DonateScreen"
        component={DonateScreen}
        options={{
          title: "Donate",
          headerTitleAlign: "center",
          headerTintColor: COLORS.font,
          headerStyle: {
            backgroundColor: COLORS.background_dark,
          },

          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
            color: COLORS.font,
          },
        }}
      />
      <Stack.Screen
        name="GetStarted"
        component={GetStartedScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="FoodHome"
        component={FoodHomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CafeMenu"
        component={MenuScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
export default AppStack;
