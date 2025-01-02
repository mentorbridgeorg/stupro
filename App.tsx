/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NativeBaseProvider} from 'native-base';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {theme} from './src/theme';
import {SignUp} from './src/pages/SignUp/SignUp';

function App(): React.JSX.Element {
  return (
    <NativeBaseProvider theme={theme}>
      <SafeAreaView>
        <SignUp />
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

export default App;
