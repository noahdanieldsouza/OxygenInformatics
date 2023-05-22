import React, {useState, useContext} from "react"
import {Text, View, SafeAreaView, Button, StyleSheet} from "react-native"
import StyledButton from "../components/button"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Video } from 'expo-av';
import { RecordingContext } from "../infastructure/videocontext"



const CreateScreen = ({navigation}) => {
const [videoDetails, setVideoDetails ] = useState([])
const {recordings} = useContext(RecordingContext)
console.log(recordings)


return(
    <SafeAreaView> 
    <View style = {styles.container}> 
 

        <StyledButton title = {"Drafts"}> </StyledButton>

        <StyledButton title = {"New"} onPress = {() => {navigation.navigate("CameraScreen")}}> </StyledButton>
        {recordings?  (<Video source = {{uri:recordings[0] }}></Video>): <Text> No Videos</Text>}
    </View>
    </SafeAreaView>
)
}

export default CreateScreen

const styles = StyleSheet.create({
    container:{
         
         flexDirection: "row", 
         justifyContent:"center"

    }
}

)

