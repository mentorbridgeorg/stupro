import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {ForgotPassword} from '../pages/ForgotPassword';
import {Home} from '../pages/Home';
import {Preferences} from '../pages/Preferences';
import {Profile} from '../pages/Profile';
import EditProfile from '../pages/Profile/EditProfile';
import {SignIn} from '../pages/SignIn';
import {SignUp} from '../pages/SignUp';
import { ResetPassword } from '@/pages/ResetPassword';
import { ChangePassword } from '../pages/ChangePassword';

import {Categories} from '@/pages/Categories/Categories';


const Stack = createNativeStackNavigator();

export const RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerTitleAlign: 'center',
        headerShadowVisible: false,
        headerShown: false,
      }}>
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Preferences" component={Preferences} />
      <Stack.Screen name="Login" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="Categories" component={Categories} />
    </Stack.Navigator>
  );
};
