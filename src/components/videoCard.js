
import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import { Audio } from 'expo-av';
import StyledButton from './button';

const VideoPlayer = ({ video, navigation }) => {
  const uri = video.uri;
  const sound = useRef(new Audio.Sound());
  const title = video.title;
  console.log("video", uri)

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

  const handleEditPress = () => {
    navigation.navigate('SubmissionScreen', { uri: uri, source: 'Drafts' });
    console.log("function", uri)
  };

  const handleDuetPress = () => {
    console.log("function", uri)
    navigation.navigate('DuetScreen', {uri: uri})
  }

  return (
    <Card>
      <View style={styles.titleContainer}>
        <Text>{title}</Text>
      </View>
      <Card.Title></Card.Title>
      <View>
        <Card.Cover resizeMode="contain" source={require('../assets/bassoon.png')} />
        <View style={styles.buttonContainer}>
        <StyledButton title="Edit" style={styles.button} onPress={() => handleEditPress()} />

          <StyledButton title="Duet" style={styles.button} onPress={() => handleDuetPress()}  />
        </View>
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

  buttonContainer: {
    flex: 1,
    alignItems: 'center',
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
  title: {
    fontSize: 20,
    fontWeight: 'bold', // Corrected fontWeight value
  },
  titleContainer: {
    alignItems: 'center',
  },
});

export default VideoPlayer;
