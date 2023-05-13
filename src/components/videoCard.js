
import { Video } from 'expo-av';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
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
        <>
        <Card style = {style}>
           <Text> {name} </Text>
          <Card.Cover>
          </Card.Cover> 
            
         </Card> 

        
          </>
    )

}

export default VideoCard
