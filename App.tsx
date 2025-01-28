import {NativeBaseProvider} from 'native-base';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {ChangePassword, SuccessPage} from './src/pages/ChangePassword';
import {SignUp} from './src/pages/SignUp/SignUp';
import {SignIn} from './src/pages/SignIn';
import {Preferences} from './src/pages/Preferences';
import {OTP} from './src/pages/OTP';
import {theme} from './src/theme';
import {FeedbackPage} from './src/pages/Feedback';
import { Streak } from './src/modules/Streak/Streak';

function App(): React.JSX.Element {
  return (
    <NativeBaseProvider theme={theme}>
      <SafeAreaView>
        {/* <OTP /> */}
        <Streak/>
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

export default App;
