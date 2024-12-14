/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {} from 'react';
import {SafeAreaView} from 'react-native';

import {} from 'react-native/Libraries/NewAppScreen';
import SignUpPage from './pages/signup_page';
import { NativeBaseProvider} from 'native-base';

function App(): React.JSX.Element {
  return <NativeBaseProvider>
      <SafeAreaView>
     <SignUpPage/>
      </SafeAreaView>
      </NativeBaseProvider>;
}

export default App;
