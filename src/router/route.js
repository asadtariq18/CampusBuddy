import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import bottomTabNavigator from './BottomTabNavigator/bottomTabNavigator';
import StoryScreen from '../screens/StoryScreen';
import InboxScreen from '../screens/InboxScreen';
import CreatePostScreen from '../screens/CreatePostScreen';
import NotificationScreen from '../screens/NotificationScreen';
import { COLORS } from '../Constants/COLORS';

const RootStack = createStackNavigator ();

const Router = () => {

  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name={"Feed"}
        component={bottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="StoryScreen"
        component={StoryScreen}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
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
      <RootStack.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={{
          title: "Notification",
          headerTitleAlign: "center",
        }}
      />
      <RootStack.Screen
        name="CreatePostScreen"
        component={CreatePostScreen}
        options={{
          title: "Create a post",
          headerTitleAlign: "center",
        }}
      />
    </RootStack.Navigator>
  );
};

export default Router;
