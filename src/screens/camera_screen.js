import { Camera, CameraType } from 'expo-camera';
import { useState, useEffect, useRef } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as MediaLibrary from 'expo-media-library'


const CameraScreen = ({navigation})  => {

  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [mediaPermissions, requestMediaPermissions] = useState(MediaLibrary.requestPermissionsAsync)
  const [start, setStart] = useState(false)
  const cameraRef = useRef() 
 
  const snap = async () => {
    
    console.log(start)
    
     if (!start) {
        setStart(true);
        let video = await cameraRef.current.recordAsync()
        console.log("video", video);
      } else {
        setStart(false);
        video.stopRecording();
        console.log ("final", video)
        MediaLibrary.saveToLibraryAsync(video.uri)
        navigation.navigate("CreateScreen")
      }

          
        }
       
    

  



 function getCameraPermission ()  {
   if (permission){
    
   }
    else{
       requestPermission( Camera.requestCameraPermissionsAsync )
    }
}
function getMediaPermission ()  {
    if (mediaPermissions){
     
    }
     else{
        requestMediaPermissions( MediaLibrary.requestPermissionsAsync )
     }
 }


useEffect(()=> {
getCameraPermission()
getMediaPermission()
}
)
   
 


  

  return (
   
    <TouchableOpacity onPress= {snap}><Camera  ref={(ref) => {cameraRef.current = ref;}} style = {{wdith: "100%", height: "100%"}}>
      
    </Camera></TouchableOpacity>
      
   
  );
}

export default CameraScreen