import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import { NativeBaseProvider, Box, Text } from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailsCard from './DetailsCard';

const Stack = createNativeStackNavigator();

// Define the HomeScreen Component


// Define the ProfileScreen Component
const Details = () => {
  return (
    <NativeBaseProvider>
    <View>
      <Text>This is the details Screen</Text>
    </View>
    </NativeBaseProvider>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
