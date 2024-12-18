import React from 'react';
import { NativeBaseProvider, Box } from 'native-base';
import { TouchableOpacity } from 'react-native';
import {}
const HomeScreen = ({navigation}) => {
    return (
        <NativeBaseProvider>
          <Box p="4" alignItems="center" margin="auto">
          <TouchableOpacity onPress={() => navigation.navigate('Details')}>
            <DetailsCard/>
          </TouchableOpacity>
          </Box>
        </NativeBaseProvider>
    );
  };

export default HomeScreen;
