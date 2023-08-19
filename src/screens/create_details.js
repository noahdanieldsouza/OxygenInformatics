import React, { useState, useContext, useRef } from "react";
import { Video, ResizeMode } from "expo-av";
import { View, TextInput, StyleSheet} from "react-native"
import { RecordingContext } from '../infastructure/videocontext';
import StyledButton from "../components/button";

export const Submission = ({ navigation, route , source}) => {
  const {recordings, clear, update} = useContext(RecordingContext);
  const [title, setTitle] = useState("unamed");
  const [instrument, setInstrument] = useState("no instrument added");
  const video = useRef();
  const [submission, setSubmission] = useState(route.params);
  const { uri } = route.params.uri; // Corrected this line

  console.log("edit", uri);

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
    setSubmission({
      ...submission,
      title: title,
      instrument: instrument,
      uri: uri,
      id: route.params.id
    });
    update(submission, submission.id);
    console.log("Update", recordings);
  };

  const Set = () => {
    setSubmission({
      ...submission,
      title: title,
      instrument: instrument,
      uri: uri,
      id: recordings.length - 1
    });
    update(submission, recordings.length - 1);
    console.log("added", submission);
    console.log("final", recordings);
  };

  const handleFunctions = () => {
    source === "Drafts" ? Update() : Set();
    navigation.navigate("DraftsScreen");
  };

  return (
    <View style={styles.container}>
      <View styles={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setTitle(text)}
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => setInstrument(text)}
        />
      </View>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: uri,
        }}
        useNativeControls
        resizeMode={ResizeMode.COVER}
        isLooping={false}
        shouldPlay
        isMuted
      />
      <View style={styles.buttons}>
        <StyledButton
          title={isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        />
        <StyledButton onPress={handleFunctions} title="Submit" />
      </View>
    </View>
  );
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
  inputContainer: {
    flex: 1,
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
