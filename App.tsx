import {RootStack} from '@/navigation/RootStack';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import {PostHogProvider} from 'posthog-react-native';
import React from 'react';
import {theme} from './src/theme';
import { LoadingProvider } from '@/Loader/LoaderStateManagement';
import LoaderComponent from '@/Loader/LoaderComponent';

require('./ReactotronConfig');

function App(): React.JSX.Element {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <PostHogProvider
          apiKey="phc_FlcrWuBmMaAMVqmYmuJ03BjVoCTomT6ckOxOOTaDWMl"
          options={{
            host: 'https://us.i.posthog.com',
          }}>
          
          <LoadingProvider>
            <RootStack />
            <LoaderComponent />
          </LoadingProvider>
        </PostHogProvider>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;