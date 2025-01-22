import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text} from 'react-native';
import {Feed} from '../modules/Feed';
import EditProfile from '../pages/Profile/EditProfile';
import {Profile} from '../pages/Profile';
import {Home} from '../pages/Home';
import {Preferences} from '../pages/Preferences';

const Stack = createNativeStackNavigator();

export const RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{headerTitleAlign: 'center', headerShadowVisible: false}}>
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Preferences" component={Preferences} />
      {/* <Stack.Screen name='' component={}/> */}
    </Stack.Navigator>
  );
};
