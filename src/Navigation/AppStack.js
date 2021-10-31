import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from "./BottomTabNavigator/bottomTabNavigator";
import StoryScreen from "../screens/StoryScreen";
import ChatScreen from "../screens/ChatScreen";
import InboxScreen from "../screens/InboxScreen";
import ViewPostScreen from "../screens/ViewPostScreen";
import {COLORS} from '../Constants/COLORS';
import DrawerNavigator from "./DrawerNavigator/drawerNavigator";

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
    </Stack.Navigator>
  );
};
export default AppStack;
