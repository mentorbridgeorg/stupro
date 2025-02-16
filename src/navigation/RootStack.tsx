import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {ChangePassword} from '@pages/ChangePassword';
import {ResetPassword} from '@pages/ResetPassword';

import {Categories} from '@pages/Categories/Categories';

import {FeedbackPage} from '@pages/Feedback';
import {ForgotPassword} from '@pages/ForgotPassword';
import {HomePage, SwipeCards} from '@pages/Home';
import Onboarding from '@pages/LandingPage/Onboarding';
import {Preferences} from '@pages/Preferences';
import {Profile} from '@pages/Profile';
import EditProfile from '@pages/Profile/EditProfile';
import {SignIn} from '@pages/SignIn';
import {SignUp} from '@pages/SignUp';

const Stack = createNativeStackNavigator();

export const RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="FeedbackPage"
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
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="FeedbackPage" component={FeedbackPage} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
    </Stack.Navigator>
  );
};
