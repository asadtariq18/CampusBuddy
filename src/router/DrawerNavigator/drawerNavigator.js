import React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import {createStackNavigator} from '@react-navigation/stack';
import FoodOrderScreen from '../../screens/FoodOrderScreen';
import DonationScreen from '../../screens/DonationScreen';
import MapScreen from '../../screens/MapScreen';
import Router from '../route';
import { DrawerContent } from './drawerContent';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


const DrawerNavigator = () =>{
const createStack = () => 
    <Router/>
return(
        <Drawer.Navigator initialRouteName="Feed" drawerContent={props => <DrawerContent{...props}/>}>
        <Drawer.Screen name="Feed" children={createStack}/>
        <Drawer.Screen name="Food Order" component={FoodOrderScreen} />
        <Drawer.Screen name="Donation" component={DonationScreen} />
        <Drawer.Screen name="Map" component={MapScreen} />

      </Drawer.Navigator>
)
}
export default DrawerNavigator;