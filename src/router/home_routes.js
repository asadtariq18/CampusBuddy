import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {View, Image, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ADIcon from 'react-native-vector-icons/AntDesign';

import HomeScreen from '../screens/HomeScreen';
import StoryScreen from '../screens/StoryScreen';
import logo from '../assets/images/logo.png';
import Drawer from './DrawerNavigator/drawerNavigator';
import ChatScreen from '../screens/ChatScreen';
import FoodOrderScreen from '../screens/FoodOrderScreen';
import styles from './style';
import SearchScreen from '../screens/SearchScreen';
import NotificationScreen from '../screens/NotificationScreen';

const HomeStack = createStackNavigator ();
const HomeRoutes = () => {
  const navigation = useNavigation ();

  const chatPress = () => {
    navigation.navigate ('ChatScreen');
  };
  const drawerPress = () => {
    navigation.openDrawer ();
  };
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Campus Buddy',
          headerTitleAlign: 'center',
          headerRightContainerStyle: {
            marginRight: 15,
          },
          headerTitle: () => (
            <View style={styles.container}>
              <Text style={styles.header}>Campus Buddy</Text>
            </View>
          ),
          headerRight: () => (
            <View>
              <Ionicons
                name="chatbox"
                size={25}
                color={'black'}
                onPress={chatPress}
              />
            </View>
          ),
          headerLeftContainerStyle: {
            marginLeft: 15,
          },
          headerLeft: () => (
            <View>
              <ADIcon
                name="menu-fold"
                size={25}
                color={'black'}
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
          title: 'Chat',
          headerTitleAlign: 'center',
          headerTintColor: 'black',
          headerStyle: {
            backgroundColor: '#fff',
          },

          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          },
        }}
      />

    </HomeStack.Navigator>
  )
};
export default HomeRoutes;
