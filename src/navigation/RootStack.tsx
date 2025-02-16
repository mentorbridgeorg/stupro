import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import DeepLink from '../pages/DeepLink/DeepLink';
import Article from '../pages/DeepLink/Article';
import { NavigationContainer } from '@react-navigation/native';
import {NavigationBar} from '@/modules/navigationBar/navigationBar';
import {View} from 'react-native';
import {ChangePassword} from '@pages/ChangePassword';
import {ResetPassword} from '@pages/ResetPassword';
import {Categories} from '@pages/Categories/Categories';
import {FeedbackPage} from '@pages/Feedback';
import {ForgotPassword} from '@pages/ForgotPassword';
import {Home, HomePage, SwipeCards} from '@pages/Home';
import Onboarding from '@pages/LandingPage/Onboarding';
import {Preferences} from '@pages/Preferences';
import {Profile} from '@pages/Profile';
import EditProfile from '@pages/Profile/EditProfile';
import {SignIn} from '@pages/SignIn';
import {SignUp} from '@pages/SignUp';

const linking = {
  prefixes: ['yourapp://'],
  config: {
    screens: {
      Article:{
        path: 'article/:articleId',
        parse: {
          articleId: (articleId : any ) => `${articleId}`,
        },
      },
      DeepLink:{
        path: 'deeplink',
      },
      Settings:{
        path: 'settings',
      },
    },
  },
};



const Stack = createNativeStackNavigator();

export const RootStack = () => {
  return (
    <NavigationContainer linking={linking}>
    <Stack.Navigator
      initialRouteName="FeedbackPage"
      screenOptions={{
        headerTitleAlign: 'center',
        headerShadowVisible: false,
        headerShown: false,
      }}>
      <Stack.Screen name="DeepLink" component={DeepLink} />
      <Stack.Screen name="Article" component={Article} />
      <Stack.Screen name="HomePage" component={HomePage}/>
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
    </NavigationContainer>
  );
};
