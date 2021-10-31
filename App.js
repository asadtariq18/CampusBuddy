import { registerRootComponent } from "expo";
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoadingScreen from "./src/screens/LoadingScreen";
import AuthStack from "./src/Navigation/AuthStack";
import AppStack from "./src/Navigation/AppStack";
import firebase from "firebase";
import {COLORS} from './src/Constants/COLORS';
import DrawerNavigator from "./src/Navigation/DrawerNavigator/drawerNavigator";

const Stack = createStackNavigator();
export default function App() {
  const [loggedIn, setLoggedIn] = React.useState();
  // const navigation = useNavigation();
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        setLoggedIn(false)
      } else {
        console.log("NOOO user here");
      }
    });
    return unsubscribe;
  });

  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName= {(loggedIn) ? "AppStack" : "AuthStack"}>
        <Stack.Screen
          name={"AuthStack"}
          component={AuthStack}
          options={{
            headerShown: false,
          }}
        />
          <Stack.Screen
            name={"Loading"}
            component={LoadingScreen}
            options={{
              headerShown: false,
            }}
          />
        <Stack.Screen
          name={"AppStack"}
          component={AppStack}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
registerRootComponent(App);