import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Tutorial from './src/screens/browse';
import Navigation from './src/navigation/navbar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Nav from './src/navigation/navbar';
import {RecordingContextProvider} from "./src/infastructure/videocontext"


function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <RecordingContextProvider>
    <NavigationContainer>
   <Navigation> </Navigation>
   </NavigationContainer>
   </RecordingContextProvider>
  );
}

export default App;
