import { Camera, CameraType } from 'expo-camera';
import { useState, useEffect, useRef } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as MediaLibrary from 'expo-media-library'


const CameraScreen = ({navigation})  => {

  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [mediaPermissions, requestMediaPermissions] = useState(MediaLibrary.requestPermissionsAsync)
  const [isRecording, setIsRecording] = useState(false)
  const [cameraRef, setCameraRef] = useState(null) 
 
  
  const start = async () => {
    console.log("start")
    setIsRecording(true);
    const videoRecordPromise = cameraRef.recordAsync();
    const videoData = await videoRecordPromise;
    setIsRecording(false);
    await saveVideoToMediaLibrary(videoData);
  };

  const stop= async () => {
    console.log("stop")
    setIsRecording(false);
    cameraRef.stopRecording();
  };


  const saveVideoToMediaLibrary = async (videoData) => {
    const asset = await MediaLibrary.createAssetAsync(videoData.uri);
    await MediaLibrary.createAlbumAsync('My Videos', asset, false);
    alert('Video saved to media library!');
  };

  useEffect(() => {
    (async () => {
      await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();
    })();
  }, []);

  return (
   
    <TouchableOpacity onPress= {isRecording? stop: start}><Camera ref={(ref) => {
        setCameraRef(ref);
      }} style = {{width: "100%", height: "100%"}}>
      
    </Camera></TouchableOpacity>
      
   
  );
}

export default CameraScreen