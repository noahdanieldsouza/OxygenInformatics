
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateScreen from '../screens/create';
import CameraScreen from '../screens/camera_screen';
import { Submission } from '../screens/create_details';
const CameraStack = createNativeStackNavigator();

export const CreateNavigation = () => {
    return(
    <CameraStack.Navigator screenOptions={{ headerShown: false }}> 
     <CameraStack.Screen headerMode= "none" name = "CreateScreen" component={CreateScreen}/> 
    <CameraStack.Screen headerMode= "none" name = "CameraScreen" component={CameraScreen}/>
    <CameraStack.Screen headerMode= "none" name = "SubmissionScreen" component={Submission}/>
 
   




        </CameraStack.Navigator>
    )
}