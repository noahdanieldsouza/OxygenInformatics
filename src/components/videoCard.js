
import { Video } from 'expo-av';
import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Card } from 'react-native-paper';


 const VideoCard = ({video = {}, style}) => {

    const {
        name = "Untitled",
        creator = "Untitled",
        duets = "none",
        uri = "none"
    }
    = video

    return (
        
        <Card  mode = {"elevated"} style = {style}>
            <Card.Cover source = {{uri: 'https://picsum.photos/700'}}></Card.Cover>
       

           
         
            
         </Card> 

        
         
    )

}

export default VideoCard
