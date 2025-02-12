import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {ForgotPassword} from '../pages/ForgotPassword';
import {Home} from '../pages/Home/Home';
import {Preferences} from '../pages/Preferences';
import {Profile} from '../pages/Profile';
import EditProfile from '../pages/Profile/EditProfile';
import {SignIn} from '../pages/SignIn';
import {SignUp} from '../pages/SignUp';
import {FeedbackPage} from '../pages/Feedback';
import {SwipeCards } from '@/pages/Home';
import {HomePage} from '../modules/Home/Homepage';
import ShareExample from '../../ShareExample';
import DeepLink from '../pages/DeepLink/DeepLink';
import Article from '../pages/DeepLink/Article';
// import { Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { parse } from 'react-native-svg';
// import { Settings } from 'react-native';


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
      initialRouteName="HomePage"
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
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Preferences" component={Preferences} />
      <Stack.Screen name="Login" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="Feedbackpage" component={FeedbackPage} />
      <Stack.Screen name="ShareExample" component={ShareExample} />
    </Stack.Navigator>
    </NavigationContainer>
  );
};
