import React from 'react';
import { TouchableOpacity } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { SharedElement } from 'react-navigation-shared-element';
import DetailsScreenTest from './DetailsScreenTest';

const HomeScreenTest = ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
        <SharedElement id="sharedCard">
            <DetailsScreenTest />
        </SharedElement>
      </TouchableOpacity>
    </NativeBaseProvider>
  );
};

export default HomeScreenTest;
