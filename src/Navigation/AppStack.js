import React from "react";
import { Icon } from "native-base";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import StoryScreen from "../screens/StoryScreen";
import EditProfileScreen from "../screens/EditProfileScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ChatScreen from "../screens/ChatScreen";
import InboxScreen from "../screens/InboxScreen";
import ViewPostScreen from "../screens/ViewPostScreen";
import DonateScreen from "../screens/DonationScreen/DonateScreen";
import CreateDonationPostScreen from "../screens/DonationScreen/CreateDonationPostScreen";
import GetStartedScreen from "../screens/FoodOrderScreen/GetStartedScreen";
import FoodHomeScreen from "../screens/FoodOrderScreen/FoodHomeScreen";
import { COLORS } from "../Constants/COLORS";
import DrawerNavigator from "./DrawerNavigator/drawerNavigator";
import MenuScreen from "../screens/FoodOrderScreen/MenuScreen";
import ConfirmOrderScreen from "../screens/FoodOrderScreen/ConfirmOrderScreen";
import UserProfileScreen from "../screens/UserProfileScreen";
import FriendsListScreen from "../screens/FriendsListScreen";
import SignInScreen from "../screens/SignInScreen";
import database from "../Database/database";
import OrderPlacedScreen from "../screens/FoodOrderScreen/OrderPlacedScreen";
import DonationHome from "../screens/DonationScreen/DonationHome";
import PaymentSuccessScreen from "../screens/DonationScreen/PaymentSuccessScreen";

const Stack = createStackNavigator();
const AppStack = () => {
  const navigation = useNavigation();
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
          headerRight: () => (
            <Icon
              name="add"
              style={{ color: COLORS.font }}
              onPress={() =>
                navigation.navigate("FriendsListScreen", {
                  userID: database.getCurrentUser().userID,
                  newChat: true,
                })
              }
            />
          ),
          headerRightContainerStyle: {
            marginEnd: 8,
          },
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
            color: COLORS.font,
          },
        }}
      />

      <Stack.Screen
        name="CreateDonationPostScreen"
        component={CreateDonationPostScreen}
        options={{
          title: "Create a donation post",
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
        name="DonationHome"
        component={DonationHome}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PaymentSuccess"
        component={PaymentSuccessScreen}
        options={{
          headerShown: false,
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
        name="SignIn"
        component={SignInScreen}
        options={{ headerShown: false }}
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
      <Stack.Screen
        name="ConfirmOrder"
        component={ConfirmOrderScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="OrderPlaced"
        component={OrderPlacedScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="UserProfile"
        component={UserProfileScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="FriendsListScreen"
        component={FriendsListScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
export default AppStack;
