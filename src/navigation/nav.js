
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateScreen from '../screens/browse';
import CameraScreen from '../screens/camera_screen';
import { Submission } from '../screens/create_details';
import Drafts from '../screens/drafts';

const CameraStack = createNativeStackNavigator();

export const CreateNavigation = () => {
  return (
    <CameraStack.Navigator screenOptions={{ headerShown: false }}>
     
      <CameraStack.Screen name="DraftsScreen" component={Drafts}/>
      <CameraStack.Screen name="CameraScreen" component={CameraScreen} />
      <CameraStack.Screen
        name="SubmissionScreen"
        component={Submission}
        initialParams={{ uri: null }}
      />
    </CameraStack.Navigator>
  );
};



