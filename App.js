import { registerRootComponent } from "expo";
import React, { useEffect, useState } from "react";
import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoadingScreen from "./src/screens/LoadingScreen";
import AuthStack from "./src/Navigation/AuthStack";
import AppStack from "./src/Navigation/AppStack";
import Firebase from "././src/config/Firebase";
import { StripeProvider } from "@stripe/stripe-react-native";
import { Provider } from "react-redux";
import store from "./src/Redux/store";
import { MenuProvider } from "react-native-popup-menu";

const auth = Firebase.auth();
const Stack = createStackNavigator();

export const AppWrapper = () => {
  return (
    <Provider store={store}>
      <MenuProvider>
        <App />
      </MenuProvider>
    </Provider>
  );
};

export default function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  LogBox.ignoreLogs([
    "Setting a timer for a long period of time",
    `fontFamily "Roboto_medium" is not a system font and has not been loaded through Font.loadAsync.

- If you intended to use a system font, make sure you typed the name correctly and that it is supported by your device operating system.

- If this is a custom font, be sure to load it with Font.loadAsync.`,
    `VirtualizedLists should never be nested inside plain ScrollViews with the same orientation - use another VirtualizedList-backed container instead.`,
    "`flexWrap: `wrap`` is not supported with the `VirtualizedList` components.Consider using `numColumns` with `FlatList` instead.",
    `Each child in a list should have a unique "key" prop.`,
  ]);

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth.onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  if (user && auth.currentUser.emailVerified)
    return (
      <StripeProvider publishableKey="pk_test_51IUxdTFDTtq4Q7pzLMiGs5OUqN7HFJCOQeLGHQuBw2t8OPHwUaSewutTkk9Sb0OTPRvcQ1b7sGwAwi3uhfEkNK1F00HTG9b5Kk">
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name={"AppStack"}
              component={AppStack}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </StripeProvider>
    );

  return (
    <StripeProvider publishableKey="pk_test_51IUxdTFDTtq4Q7pzLMiGs5OUqN7HFJCOQeLGHQuBw2t8OPHwUaSewutTkk9Sb0OTPRvcQ1b7sGwAwi3uhfEkNK1F00HTG9b5Kk">
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={"AuthStack"}
            component={AuthStack}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </StripeProvider>
  );
}

registerRootComponent(AppWrapper);
