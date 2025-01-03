/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NativeBaseProvider} from 'native-base';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {SignIn} from './src/pages/SignIn';
import {theme} from './src/theme';

function App(): React.JSX.Element {
  return (
    <NativeBaseProvider theme={theme}>
      <SafeAreaView>
        <SignIn />
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

export default App;
