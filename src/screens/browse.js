import React, { useContext } from "react"
import { StyleSheet, Text, View, FlatList, ScrollView, SafeAreaView } from "react-native"
import VideoCard from "../components/videoCard"
import {RecordingContext} from "../infastructure/videocontext"


const Tutorial = () => {
const {recordings} = useContext(RecordingContext)
    return(
        
        <>
        <SafeAreaView/>

    <FlatList
    style = {styles.container}
        data={recordings}
        renderItem= {({item}) =>  {console.log(item);  return(<VideoCard uri = {item}> </VideoCard>)}}
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
  

export default Tutorial
