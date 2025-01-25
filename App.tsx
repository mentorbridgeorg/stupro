import {RootStack} from '@/navigation/RootStack';
import {theme} from '@/theme';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import { PostHogProvider } from 'posthog-react-native';
import React from 'react';

function App(): React.JSX.Element {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
      <PostHogProvider apiKey="phc_FlcrWuBmMaAMVqmYmuJ03BjVoCTomT6ckOxOOTaDWMl" options={{
            // usually 'https://us.i.posthog.com' or 'https://eu.i.posthog.com'
            
host: 'https://us.i.posthog.com', 
        }}>

        <RootStack />
        </PostHogProvider>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
