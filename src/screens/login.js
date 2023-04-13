import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from "react"
import { SideBar } from '../side_bar';
import { StyledButton } from '../components/button';


export const LoginScreen = ()  => {
   
    return (
      <>
     
      <View style={styles.container}>
  
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
  
        <SideBar></SideBar>
      
        <StyledButton title = "Log In" mode = "contained" color = "blue"></StyledButton>
      </View>
  
      </>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      marginTop: 50,
      flex: 1, 
      flexDirection: "column",
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });