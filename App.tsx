/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

//import {NativeBaseProvider} from 'native-base';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {Preferences} from './src/pages/Preferences';
import {theme} from './src/theme';

function App(): React.JSX.Element {
  return (
    //<NativeBaseProvider theme={theme}>
      <SafeAreaView style ={{flex : 1}}>
        <Preferences />
      </SafeAreaView>
    //</NativeBaseProvider>
  );
}

export default App;
