import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator } from "@react-navigation/drawer";
import Root from './router/DrawerNavigator/drawerNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <Root/>
    </NavigationContainer>
  );
}