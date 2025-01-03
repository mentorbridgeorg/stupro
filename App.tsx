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
import {SignIn} from './src/pages/SignIn';
import {Preferences} from './src/pages/Preferences';
import {Home} from './src/pages/Home';
import {ChangePassword, SucessPage} from './src/pages/ChangePassword';

function App(): React.JSX.Element {
  return (
    <NativeBaseProvider theme={theme}>
      <SafeAreaView>
        <ChangePassword/>
        {/* <SucessPage/> */}
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

export default App;
