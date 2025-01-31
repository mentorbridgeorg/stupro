import {RootStack} from '@/navigation/RootStack';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import {PostHogProvider} from 'posthog-react-native';
import React from 'react';
<<<<<<< HEAD
import {theme} from './src/theme';

require('./ReactotronConfig');
=======
import {SafeAreaView} from 'react-native';
import {ChangePassword, SuccessPage} from './src/pages/ChangePassword';
import {theme} from './src/theme';
import {SignUp} from './src/pages/SignUp/SignUp';
import {SignIn} from './src/pages/SignIn';
import {Preferences} from './src/pages/Preferences';
import { FeedbackPage } from './src/pages/Feedback';
>>>>>>> parent of 4820360 (homepage add)

function App(): React.JSX.Element {
  return (
    <NativeBaseProvider theme={theme}>
<<<<<<< HEAD
      <NavigationContainer>
        <PostHogProvider
          apiKey="phc_FlcrWuBmMaAMVqmYmuJ03BjVoCTomT6ckOxOOTaDWMl"
          options={{
            host: 'https://us.i.posthog.com',
          }}>
          <RootStack />
        </PostHogProvider>
      </NavigationContainer>
=======
      <SafeAreaView>
        {/* <ChangePassword/> */}
        <FeedbackPage/>
      </SafeAreaView>
>>>>>>> parent of 4820360 (homepage add)
    </NativeBaseProvider>
  );
}

export default App;