import {RootStack} from '@/navigation/RootStack';
import {theme} from './src/theme';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import React from 'react';

function App(): React.JSX.Element {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
