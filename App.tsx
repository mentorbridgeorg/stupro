import React from 'react';
import {View, Button, TouchableOpacity} from 'react-native';
import { NativeBaseProvider, Box, Text, HStack } from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailsCard from './DetailsCard';

const Stack = createNativeStackNavigator();

// Define the HomeScreen Component
const HomeScreen = ({navigation}) => {
  return (
      <NativeBaseProvider>
        <Box p="4" alignItems="center" margin="auto">
        <TouchableOpacity onPress={() => navigation.navigate("Details")}>
          <DetailsCard/>
        </TouchableOpacity>
        </Box>
      </NativeBaseProvider>
  );
};

// Define the ProfileScreen Component
const Details = () => {
  return (
    <View>
      <Text>This is the details Screen</Text>
    </View>
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
