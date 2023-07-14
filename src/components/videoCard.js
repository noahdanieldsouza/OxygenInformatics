
import React, { useEffect, useRef } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import { Audio } from 'expo-av';
import StyledButton from './button';

const VideoPlayer = ({uri}) => {

  const sound = useRef(new Audio.Sound());
  console.log("videocard", uri)

  useEffect(() => {
    return () => {
      sound.current.unloadAsync();
    };
  }, []);

  const playAudio = async () => {
    try {
      const status = await sound.current.getStatusAsync();
      if (status.isLoaded) {
        await sound.current.unloadAsync();
      }
      await sound.current.loadAsync({ uri: uri });
      await sound.current.playAsync();
    } catch (error) {
      console.log('Error playing audio:', error);
    }
  };

  return (
    <Card>
      <Card.Title> </Card.Title>
      <View>
    <Card.Cover    resizeMode = "contain" source = {require('../assets/bassoon.png')}/>
    <StyledButton title = {"play"}style = {styles.button} onPress={ playAudio}/> 
    </View>
    
  
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
})

export default VideoPlayer;
