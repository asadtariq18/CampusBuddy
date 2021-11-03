import { registerRootComponent } from "expo";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoadingScreen from "./src/screens/LoadingScreen";
import AuthStack from "./src/Navigation/AuthStack";
import AppStack from "./src/Navigation/AppStack";
import Firebase from "././src/config/Firebase";

const auth = Firebase.auth();
const Stack = createStackNavigator();

export default function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

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
    );

  return (
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
  );
}

registerRootComponent(App);
