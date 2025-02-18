import {RootStack} from '@/navigation/RootStack';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import {PostHogProvider} from 'posthog-react-native';
import React, { useEffect } from 'react';
import {theme} from './src/theme';
import usePushNotification from '@/modules/Notification/usePushNotification';

require('./ReactotronConfig');

const App = () => {
  const {
    requestUserPermission,
    getFCMToken,
    listenToBackgroundNotifications,
    listenToForegroundNotifications,
    onNotificationOpenedAppFromBackground,
    onNotificationOpenedAppFromQuit,
  } = usePushNotification();

  useEffect(() => {
    const listenToNotifications = () => {
      try {
        getFCMToken();
        requestUserPermission();
        onNotificationOpenedAppFromQuit();
        listenToBackgroundNotifications();
        listenToForegroundNotifications();
        onNotificationOpenedAppFromBackground();
      } catch (error) {
        console.log(error);
      }
    };

    listenToNotifications();
  }, []);

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
