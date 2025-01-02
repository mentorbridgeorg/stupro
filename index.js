/**
 * @format
 */

import {AppRegistry, LogBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

LogBox.ignoreAllLogs(true); //Ignore all log notifications
console.disableYellowBox = true;

AppRegistry.registerComponent(appName, () => App);
