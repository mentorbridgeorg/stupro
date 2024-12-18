import React from 'react';
import { NativeBaseProvider, Box } from 'native-base';
import { TouchableOpacity } from 'react-native';
import DetailsCard from './DetailsCard';
import { SharedElement } from 'react-native-shared-element';
const Home = ({navigation}) => {
    return (
        <NativeBaseProvider>
        <TouchableOpacity onPress={() => navigation.navigate('Details')}>
          <SharedElement id="id">
          <Box p="4" alignItems="center" margin="auto">
            <DetailsCard/>
          </Box>
          </SharedElement>
        </TouchableOpacity>
        </NativeBaseProvider>
    );
  };

export default Home;
