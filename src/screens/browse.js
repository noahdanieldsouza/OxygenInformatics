import React, {useState, useContext} from "react"
import {Text, View, SafeAreaView, Button, StyleSheet} from "react-native"
import StyledButton from "../components/button"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Video } from 'expo-av';
import { RecordingContext } from "../infastructure/videocontext"
import { GestureHandlerRootView } from 'react-native-gesture-handler';



const BrowseScreen = ({navigation}) => {
const [videoDetails, setVideoDetails ] = useState([])
const {recordings} = useContext(RecordingContext)
console.log(recordings)


return(
    <Text> Browse</Text>
)
}

export default BrowseScreen

const styles = StyleSheet.create({
    container:{
         
         flexDirection: "row", 
         justifyContent:"center"

    }
}

)

