
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateScreen from '../screens/create';
import CameraScreen from '../screens/camera_screen';
import { Submission } from '../screens/create_details';

const CameraStack = createNativeStackNavigator();

export const CreateNavigation = () => {
  return (
    <CameraStack.Navigator screenOptions={{ headerShown: false }}>
      <CameraStack.Screen name="CreateScreen" component={CreateScreen} />
      <CameraStack.Screen name="CameraScreen" component={CameraScreen} />
      <CameraStack.Screen
        name="SubmissionScreen"
        component={Submission}
        initialParams={{ uri: null }}
      />
    </CameraStack.Navigator>
  );
};



