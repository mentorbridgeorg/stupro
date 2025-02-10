import {RootStack} from '@/navigation/RootStack';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import {PostHogProvider} from 'posthog-react-native';
import React, { useEffect } from 'react';
import {theme} from './src/theme';
//import messaging from '@react-native-firebase/messaging';
import {PermissionsAndroid, Platform} from 'react-native';
PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
require('./ReactotronConfig');
import {
  requestUserPermission,
  setupForegroundListener,
  setupBackgroundHandler,
} from './src/push-notification/Pushnotification';

function App(): React.JSX.Element {

  //Push Notification part start here
  useEffect(() => {
    async function initializePushNotifications() {
      if (Platform.OS === 'android') {
        await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
      }

      await requestUserPermission();  // Request user permission
      setupBackgroundHandler();       // Handle background notifications

      const unsubscribe = setupForegroundListener();  // Handle foreground notifications
      
      
      return () => unsubscribe();     // Cleanup
    }

    initializePushNotifications();
  }, []);

  //push notification ends here


  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <PostHogProvider
          apiKey="phc_FlcrWuBmMaAMVqmYmuJ03BjVoCTomT6ckOxOOTaDWMl"
          options={{
            host: 'https://us.i.posthog.com',
          }}>
          <RootStack />
        </PostHogProvider>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;