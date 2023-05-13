import React, {useState} from "react"
import {Text, View, SafeAreaView, Button, StyleSheet} from "react-native"
import StyledButton from "../components/button"
import { createNativeStackNavigator } from "@react-navigation/native-stack"



const CreateScreen = ({navigation}) => {
const [videoDetails, setVideoDetails ] = useState([])


return(
    <SafeAreaView> 
    <View style = {styles.container}> 
 

        <StyledButton title = {"Drafts"}> </StyledButton>

        <StyledButton title = {"New"} onPress = {() => {navigation.navigate("CameraScreen")}}> </StyledButton>
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

