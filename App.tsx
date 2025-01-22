/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NativeBaseProvider, Stack} from 'native-base';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {RootStack} from './src/navigation/RootStack';

function App(): React.JSX.Element {
  return (
    <>
      <NativeBaseProvider theme={theme}>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </NativeBaseProvider>
    </>
  );
}

export default App;
