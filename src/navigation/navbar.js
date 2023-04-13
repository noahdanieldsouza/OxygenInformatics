// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './home';
import Tutorial from './video';
import CreateScreen from './create';
import { NavigationContainer } from '@react-navigation/native';



const Tab = createBottomTabNavigator();

function Nav() {
  return (

    <Tab.Navigator> 
<Tab.Screen name = "Home" component = {HomeScreen}></Tab.Screen> 
<Tab.Screen name = "Browse" component = {Tutorial}></Tab.Screen> 
<Tab.Screen name = "Create" component = {CreateScreen}></Tab.Screen> 
    </Tab.Navigator>
    
   
  );
}

export default Nav;

