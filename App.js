import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, {useState, useEffect} from "react"

export default function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect (() => {
    fetch("/time").then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    })
  });
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Text> The Time is {currentTime}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
