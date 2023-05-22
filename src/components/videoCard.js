
import { Video,ResizeMode } from 'expo-av';
import React, {useState, useRef} from 'react';
import { StyleSheet, View, Button} from 'react-native';
import { Card } from 'react-native-paper';


 const VideoCard = ({uri, style}) => {

console.log("Card", uri)

const video = useRef(null);
const [status, setStatus] = useState({});
return (
  <View style={styles.container}>
    <Video
      ref={video}
      style={styles.video}
      source={{
        uri: uri,
      }}
      useNativeControls
      resizeMode={ResizeMode.CONTAIN}
      isLooping
      onPlaybackStatusUpdate={status => setStatus(() => status)}
    />
    <View style={styles.buttons}>
      <Button
        title={status.isPlaying ? 'Pause' : 'Play'}
        onPress={() =>
          status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
        }
      />
    </View>
  </View>
);
    
      
           
       

           
         
            
       

        
         
   

}

export default VideoCard

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
    },
    video: {
      alignSelf: 'center',
      width: 320,
      height: 200,
    },
    buttons: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
