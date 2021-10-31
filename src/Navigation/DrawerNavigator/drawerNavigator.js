import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FoodOrderScreen from "../../screens/FoodOrderScreen";
import DonationScreen from "../../screens/DonationScreen";
import MapScreen from "../../screens/MapScreen";
import { DrawerContent } from "./drawerContent";
import BottomTabNavigator from "../BottomTabNavigator/bottomTabNavigator";


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Feed"
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="Feed" children={BottomTabNavigator} />
      <Drawer.Screen name="Food Order" component={FoodOrderScreen} />
      <Drawer.Screen name="Donation" component={DonationScreen} />
      <Drawer.Screen name="Map" component={MapScreen} />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;
