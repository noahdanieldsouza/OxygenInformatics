import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Tutorial from './src/screens/drafts';
import Navigation from './src/navigation/navbar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Nav from './src/navigation/navbar';
import {RecordingContextProvider} from "./src/infastructure/videocontext"
import { GestureHandlerRootView } from 'react-native-gesture-handler';


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
    <GestureHandlerRootView style = {{flex: 1}}>
    <RecordingContextProvider>
    <NavigationContainer>
   <Navigation> </Navigation>
   </NavigationContainer>
   </RecordingContextProvider>
   </GestureHandlerRootView>
  );
}

export default App;
