import {NativeBaseProvider} from 'native-base';
import React from 'react';
import {SafeAreaView} from 'react-native';
//import {ChangePassword, SuccessPage} from './src/pages/ChangePassword';
//import {theme} from './src/theme';
//import {SignUp} from './src/pages/SignUp/SignUp';
//import {SignIn} from './src/pages/SignIn';
//import {Preferences} from './src/pages/Preferences';
//import { FeedbackPage } from './src/pages/Feedback';
import { Homepage } from './src/pages/Home';


function App(): React.JSX.Element {
  return (
    <NativeBaseProvider >
      <SafeAreaView>
        <Homepage/>
        {/* <ChangePassword/> */}
        
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

export default App;
