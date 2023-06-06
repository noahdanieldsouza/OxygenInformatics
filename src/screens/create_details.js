import React, { useState, useContext } from "react";
import { Video } from "expo-av";
import {Text, View, TextInput, TouchableOpacity, StyleSheet} from "react-native"
import { RecordingContext } from '../infastructure/videocontext';

export const Submission = ({uri}) => {
const {recordings, clear} = useContext(RecordingContext)
const [titleText, setTitleText] = useState("")
const [instrumentText, setInstrumentText] = useState('')
console.log("details", recordings)
const submission = {
    Title : null,
    Instrument : null,
    Media : {uri}
}
    return(
        <View style = {styles.container}> 
            <TextInput
           style = {styles.input}
            onChangeText={text => setTitleText(text)}
            ></TextInput>
          <Video style = {styles.video} source = {{uri: recordings[0].uri }}></Video>
        </View>

    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
       
        
    },
    video: {
        alignSelf: 'center',
        width: 320,
        height: 200,
      },
      input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
    
})