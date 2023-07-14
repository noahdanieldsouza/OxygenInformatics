import React, { useState, useContext, useRef } from "react";
import { Video, ResizeMode } from "expo-av";
import {Text, View, TextInput, TouchableOpacity, StyleSheet} from "react-native"
import { RecordingContext } from '../infastructure/videocontext';
import StyledButton from "../components/button";
import { SafeArea } from "../components/safearea";

export const Submission = ({ navigation, route }) => {
const {recordings, clear, update} = useContext(RecordingContext)
const [title, setTitle] = useState ("unamed")
const [instrument, setInstrument] = useState ("no instrument added")
const video = useRef()
const [submission, setSubmission] = useState(route.params)
const { uri } = route.params.uri;
console.log("Submission", uri)

const [isPlaying, setIsPlaying] = useState(false);

const togglePlayPause = async () => {
  if (isPlaying) {
    await video.current.pauseAsync();
  } else {
    await video.current.playAsync();
  }
  setIsPlaying(!isPlaying);
};

const Update = () => {
  setSubmission(submission.title = title, submission.instrument = instrument, submission.uri = uri)
  update(submission, 0)
  console.log("added", submission)

}
    return(
        
      <View style={styles.container}>
        <View styles = {styles.inputContainer} >
        <TextInput style = {styles.input} onChangeText = {(text) => setTitle(text)}> </TextInput>
        <TextInput style = {styles.input} onChangeText = {(text) => setInstrument(text)}> </TextInput>
        </View>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: uri,
        }}
        useNativeControls
        resizeMode={ResizeMode.COVER}
        isLooping = {false}
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
       <StyledButton onPress = {Update}title = {"Submit"}> </StyledButton>
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
    inputContainer:{
      flex: 1

    },
    input: {
      width: 300,
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center'
    },
  });