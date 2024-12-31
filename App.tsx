/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {} from 'react';

import {} from 'react-native/Libraries/NewAppScreen';
// import SignUpscreen from './src/screens/Signupscreen';
// import SignUpscreen from './screens/SignupScreen';

import { NativeBaseProvider} from 'native-base';
import SelectUserTypeScreen from './src/screens/SelectUserTypeScreen';

function App(): React.JSX.Element {
  return <NativeBaseProvider>
    {/* <SignUpscreen /> */}
    <SelectUserTypeScreen/>
  </NativeBaseProvider>;
  
}

export default App;
