import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest, useAutoDiscovery } from 'expo-auth-session';
import { Button } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';

WebBrowser.maybeCompleteAuthSession();

const login = () =>  {
  // Endpoint
  const discovery = useAutoDiscovery('https://login.microsoftonline.com/dd81cd90-b6d4-47ef-a044-bd141804369d/v2.0');
  // Request
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: 'f8f7cae6-8493-4cf2-8bf9-9e6db3eceb3c',
      scopes: ['openid'],
      redirectUri: "msalf8f7cae6-8493-4cf2-8bf9-9e6db3eceb3c://auth"
    },
    discovery
  );
 
  return (
    <Button
      disabled={!request}
      title="Login"
      onPress={() => {
        promptAsync();
      }}
    />
  );
}

export default login