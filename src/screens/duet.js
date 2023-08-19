import React, {useEffect, useRef} from "react";
import { View, Text } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Audio } from 'expo-av';


const DuetScreen = ({route}) => {
    const uri = route.params.uri
    console.log("duet",route.params.uri)
    const sound = useRef(new Audio.Sound());
    
    const playAudio = async () => {
        try {
          const status = await sound.current.getStatusAsync();
          if (status.isLoaded) {
            await sound.current.unloadAsync();
          }
          await sound.current.loadAsync({ uri: uri.uri });
          await sound.current.playAsync();
        } catch (error) {
          console.log('Error playing audio:', error);
        }
      };
    
    return(
    <View style = {{alignItems:"center", justifyContent:"center", flex: .5}}>
    <AntDesign name="play" size={34} color="purple" onPress={ playAudio}/>
    </View>
    )
}

export default DuetScreen