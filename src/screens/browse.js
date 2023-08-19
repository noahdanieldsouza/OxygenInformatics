import React, {useState, useContext} from "react"
import {Text, StyleSheet} from "react-native"
import { RecordingContext } from "../infastructure/videocontext"



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

