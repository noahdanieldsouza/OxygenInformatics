import React, {useState} from "react"
import {Text, View, SafeAreaView, Button} from "react-native"
import StyledButton from "../components/button"
import { createNativeStackNavigator } from "@react-navigation/native-stack"



const CreateScreen = ({navigation}) => {
const [videoDetails, setVideoDetails ] = useState([])


return(
    <SafeAreaView> 
    <View> 
 

        <StyledButton title = {"Drafts"}> </StyledButton>

        <Button title = {"New"} onPress = {() => {navigation.navigate("CameraScreen")}}> </Button>
    </View>
    </SafeAreaView>
)
}

export default CreateScreen


