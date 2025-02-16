/**
 * @format
 */

import {AppRegistry, LogBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging'

LogBox.ignoreAllLogs(true); //Ignore all log notifications
console.disableYellowBox = true;

messaging().setBackgroundMessageHandler(async remoteMessage =>{
    console.log('killed state notification.', remoteMessage);
});



AppRegistry.registerComponent(appName, () => App);
