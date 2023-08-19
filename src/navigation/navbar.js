// In App.js in a new project

import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BrowseScreen from '../screens/browse';
import { Entypo } from '@expo/vector-icons';
import { CreateNavigation } from './nav';
import GoogleLogin from '../screens/googlelogin';



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
    
    
<Tab.Screen  name = "Login" component = {GoogleLogin}></Tab.Screen> 
<Tab.Screen name = "Browse" component = {BrowseScreen}></Tab.Screen> 
<Tab.Screen name = "Create" component = {CreateNavigation}></Tab.Screen> 
</Tab.Navigator>
    
  
  );
}

export default Nav;

