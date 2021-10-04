import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "../screens/HomeScreen";
import ChatScreen from "../screens/ChatScreen";
import styles from "./style";
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
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Campus Buddy",
          headerTitleAlign: "center",
          headerStyle: {
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
            marginRight: 10,
          },
          headerLeftContainerStyle: {
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
            color: COLORS.font,
          },
        }}
      />
    </HomeStack.Navigator>
  );
};
export default HomeRoutes;
