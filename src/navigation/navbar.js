// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './home';
import Tutorial from './video';
import CreateScreen from './create';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons'
import { Entypo } from '@expo/vector-icons';
import { CreateNavigation } from './nav';


const Tab = createBottomTabNavigator();

function Nav() {
  return (

    

    <Tab.Navigator 
   
        screenOptions={  ({ route }) => ({
        headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
                iconName = "home"
              
            } else if (route.name === 'Browse') {
              iconName = "folder-music";
            } else if (route.name === 'Create') {
                iconName = "controller-record";
              }
  

            
            return <Entypo name={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
    
    
<Tab.Screen  name = "Home" component = {HomeScreen}></Tab.Screen> 
<Tab.Screen name = "Browse" component = {Tutorial}></Tab.Screen> 
<Tab.Screen name = "Create" component = {CreateNavigation}></Tab.Screen> 
    </Tab.Navigator>
    
  
  );
}

export default Nav;

