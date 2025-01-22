/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NativeBaseProvider, Stack} from 'native-base';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {ChangePassword, SuccessPage} from './src/pages/ChangePassword';
import {SignUp} from './src/pages/SignUp/SignUp';
import {SignIn} from './src/pages/SignIn';
import {Preferences} from './src/pages/Preferences';
import {Home} from './src/pages/Home';
import {Profile} from './src/pages/Profile';
import EditProfile from './src/pages/Profile/EditProfile';
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
