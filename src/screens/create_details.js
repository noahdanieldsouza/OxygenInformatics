import React, { useState, useContext, useRef } from "react";
import { Video, ResizeMode } from "expo-av";
import {Text, View, TextInput, TouchableOpacity, StyleSheet} from "react-native"
import { RecordingContext } from '../infastructure/videocontext';
import StyledButton from "../components/button";
import { SafeArea } from "../components/safearea";

export const Submission = (uri) => {
const {recordings, clear} = useContext(RecordingContext)
const video = useRef()
console.log("Submission", uri.route.params.uri)
const submission = {
    Title : null,
    Instrument : null,
    Media : {uri}
}
const [isPlaying, setIsPlaying] = useState(false);

const togglePlayPause = async () => {
  if (isPlaying) {
    await video.current.pauseAsync();
  } else {
    await video.current.playAsync();
  }
  setIsPlaying(!isPlaying);
};
    return(
        
      <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: uri.route.params.uri,
        }}
        useNativeControls
        resizeMode={ResizeMode.COVER}
        isLooping
        onPlaybackStatusUpdate={status => {
          if (status.isPlaying !== isPlaying) {
            setIsPlaying(status.isPlaying);
          }
        }}
        shouldPlay isMuted
      ></Video>
      <View style={styles.buttons}>
      <StyledButton
      title={isPlaying ? 'Pause' : 'Play'}
      onPress={() =>
        isPlaying ? video.current.pauseAsync() : video.current.playAsync()
      }
    />
       
      </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    video: {
      width: 300,
      height: 200,
    },
  });