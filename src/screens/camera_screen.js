import { Camera, CameraType } from 'expo-camera';
import { useState, useEffect, useRef } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as MediaLibrary from 'expo-media-library'


const CameraScreen = ({navigation})  => {

  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [mediaPermissions, requestMediaPermissions] = useState(MediaLibrary.requestPermissionsAsync)
  const cameraRef = useRef() 
  const snap = async () => {
    if (cameraRef){
        const photo = await cameraRef.current.takePictureAsync()
        console.log(photo)
        MediaLibrary.saveToLibraryAsync(photo.uri)
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
   
    <TouchableOpacity onPress= {snap}><Camera ref = {(camera) => cameraRef.current = camera} style = {{wdith: "100%", height: "100%"}}>
      
    </Camera></TouchableOpacity>
      
   
  );
}

export default CameraScreen