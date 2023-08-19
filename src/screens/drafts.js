import React, { useContext } from "react"
import { StyleSheet, Text, View, FlatList, ScrollView, SafeAreaView, TouchableOpacity } from "react-native"
import VideoPlayer from "../components/videoCard"
import {RecordingContext} from "../infastructure/videocontext"
import StyledButton from "../components/button"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Video } from 'expo-av';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


const Drafts = ({navigation}) => {
  const handleEditPress = (uri) => {
    navigation.navigate('SubmissionScreen', { uri: uri, source: 'Drafts' });
  };
const {recordings, clear} = useContext(RecordingContext)
    return(
        
        <>
        <SafeAreaView/>
        <View style = {{flexDirection: "row", justifyContent: "center"}}> 
<StyledButton title = {"clear"} onPress = {clear}> </StyledButton>
<StyledButton title = {"New"} onPress = {() => {navigation.navigate("CameraScreen")}}> </StyledButton>



</View>

<FlatList
        style={styles.container}
        data={recordings}
        renderItem={({ item }) => (
         
          <VideoPlayer video={item} navigation= {navigation} />
        )}
       
      />
    
     </>
    
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
     
    
  
    },
    item: {
      backgroundColor: 'ffff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
   
    },
    title: {
      fontSize: 32,
    },
  });
  

export default Drafts
