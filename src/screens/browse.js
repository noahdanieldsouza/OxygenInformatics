import React from "react"
import { StyleSheet, Text, View, FlatList, ScrollView, SafeAreaView } from "react-native"
import VideoCard from "../components/videoCard"
import { Card } from "react-native-paper"

DATA = [

  //will be video imports
    {
        id: 0,
        name: "Video0"
    },
    {
        id: 1,
        name: "Video1"
    },
    {
        id: 2,
        name: "Video2"
    }
]
const Tutorial = () => {

    return(
        
        <>
        <SafeAreaView/>

    <FlatList
    style = {styles.container}
        data={DATA}
        renderItem={({item}) => <VideoCard style= {styles.item}>
            <VideoCard.Title title = {item.name}/>
        </VideoCard>}
        keyExtractor={item => item.id}
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
