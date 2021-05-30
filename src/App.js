

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator } from "@react-navigation/drawer";
import Root from './router/DrawerNavigator/drawerNavigator';


const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Root/>
    </NavigationContainer>

  );
}
export default App;