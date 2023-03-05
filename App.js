import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, {useState, useEffect} from "react"
import { SideBar } from './src/side_bar';
import { StyledButton } from './src/components/button';
import { SafeArea } from './src/components/safearea';
import { SearchButton } from './src/screens/search';


export default function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect (() => {
    fetch("/time").then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    })
  });
  return (
    <>
   
    <View style={styles.container}>
    <SafeArea/>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />

      <SideBar></SideBar>
      <SearchButton> </SearchButton>
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
