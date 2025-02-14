import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {ResetPassword} from '@pages/ResetPassword';
import {ChangePassword} from '@pages/ChangePassword';

import {Categories} from '@pages/Categories/Categories';

import {NavigationBar} from '@modules/navigationBar/navigationBar';
import {View} from 'react-native';
import {HomePage, SwipeCards} from '@pages/Home';
import EditProfile from '@pages/Profile/EditProfile';
import {Profile} from '@pages/Profile';
import {Preferences} from '@pages/Preferences';
import {SignIn} from '@pages/SignIn';
import {SignUp} from '@pages/SignUp';
import {ForgotPassword} from '@pages/ForgotPassword';
import {FeedbackPage} from '@pages/Feedback';
import Onboarding from '@pages/LandingPage/Onboarding';

const Stack = createNativeStackNavigator();

export const RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerTitleAlign: 'center',
        headerShadowVisible: false,
        headerShown: false,
      }}>
      <Stack.Screen name="HomePage" component={HomePage} />
      <Stack.Screen name="SwipeCards" component={SwipeCards} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Preferences" component={Preferences} />
      <Stack.Screen name="Login" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="FeedbackPage" component={FeedbackPage} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
    </Stack.Navigator>
  );
};
