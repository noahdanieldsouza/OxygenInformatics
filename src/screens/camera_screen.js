import { Camera, CameraType } from 'expo-camera';
import CreateScreen from './create';
import { useState, useEffect, useRef, useContext } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as MediaLibrary from 'expo-media-library'
import { RecordingContext } from '../infastructure/videocontext';
import { Submission } from './create_details';


const CameraScreen = ({navigation})  => {

  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [mediaPermissions, requestMediaPermissions] = useState(MediaLibrary.requestPermissionsAsync)
  const [isRecording, setIsRecording] = useState(false)
  const [cameraRef, setCameraRef] = useState(null) 
  const {add, recordings} = useContext(RecordingContext)
 


 
  
  const start = async () => {
    
    
    setIsRecording(true);
    const videoRecordPromise = cameraRef.recordAsync();
    const videoData = await videoRecordPromise;
    setIsRecording(false);
    await saveVideoToMediaLibrary(videoData);
  
  };

  const stop= async () => {
   
    setIsRecording(false);
    cameraRef.stopRecording();
   
  };

  

  const saveVideoToMediaLibrary = async (videoData) => {

    add(videoData)
   
   console.log("First", videoData.uri)
    navigation.navigate('SubmissionScreen', {uri: videoData.uri} );

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