import messaging from '@react-native-firebase/messaging';

// Request user permission
export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('FCM Authorization Status:', authStatus);
  }
}

// Foreground notification handler
export function setupForegroundListener() {
  return messaging().onMessage(async (remoteMessage) => {
    console.log('Foreground notification:', remoteMessage);
  });
}

// Background notification handler
export function setupBackgroundHandler() {
  messaging().setBackgroundMessageHandler(async (remoteMessage) => {
    console.log('Background notification:', remoteMessage);
  });
}
