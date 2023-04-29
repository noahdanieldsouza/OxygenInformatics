
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Card } from 'react-native-paper';

 const VideoCard = ({video = {}}) => {

    const {
        name = "Untitled",
        creator = "Untitled",
        duets = "none",
    }
    = video

    return (
        <Card>
           <Text> {name} </Text> 
           
         </Card> 
    )

}

export default Card
