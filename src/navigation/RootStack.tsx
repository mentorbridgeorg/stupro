import {OTP} from '@/pages/OTP';
import {FeedbackPage} from '@pages/Feedback';
import {ForgotPassword} from '@pages/ForgotPassword';
import {HomePage} from '@pages/Home';
import {Preferences} from '@pages/Preferences';
import {Profile} from '@pages/Profile';
import EditProfile from '@pages/Profile/EditProfile';
import {SignIn} from '@pages/SignIn';
import {SignUp} from '@pages/SignUp';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import { NavigationBar } from '@modules/navigationBar/navigationBar';
import {ResetPassword} from '@/pages/ResetPassword';
import {ChangePassword} from '@pages/ChangePassword';
import {Categories} from '@/pages/Categories/Categories';
import {SentencePage} from '@/pages/SentencePage/SentencePage';

const Stack = createNativeStackNavigator();

export const RootStack = () => {
  return (

    <View style={{flex: 1}}>
      <Stack.Navigator
        initialRouteName="SentencePage"
        screenOptions={{
          headerTitleAlign: 'center',
          headerShadowVisible: false,
          headerShown: false,
        }}>
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Preferences" component={Preferences} />
        <Stack.Screen name="Login" component={SignIn} />
        <Stack.Screen name="OTP" component={OTP} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="Feedback" component={FeedbackPage} />
        <Stack.Screen name="SentencePage" component={SentencePage} />
      </Stack.Navigator>
      <NavigationBar />
    </View>

  );
};
