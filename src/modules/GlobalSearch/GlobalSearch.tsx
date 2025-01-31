<<<<<<< HEAD
import {SearchIcon} from '@assets/icons/SearchIcon';
import {Box, Center, Input} from 'native-base';
import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
=======
import {Box, Center, Input} from 'native-base';
import React from 'react';
import {SearchIcon} from '../../assets/icons/SearchIcon';
>>>>>>> parent of 12a10b5 (homepage added)

export const GlobalSearch = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current; 

    // Fadein
    useEffect(() => {
      Animated.timing(fadeAnim, {
        toValue: 1, 
        duration: 1000,
        useNativeDriver: true,
      }).start();
   
     // Fadeout 
        return () => {
          Animated.timing(fadeAnim, {
            toValue: 0, 
            duration: 1000,
            useNativeDriver: true,
          }).start();
        };
      }, [fadeAnim]);
  return (
<<<<<<< HEAD
    <Animated.View
    style={{
      opacity: fadeAnim, 
    }}>
=======
>>>>>>> parent of 12a10b5 (homepage added)
    <Center>
      <Box width="80%">
        <Input
          placeholder="Search People & Places"
          width="100%"
          color={'font.tertiary'}
          fontWeight={'bold'}
          borderRadius="50"
          py="3"
          px="1"
          borderColor={'primary.500'}
          borderWidth={'1px'}
          InputLeftElement={<SearchIcon />}
          _focus={{
            borderColor: 'primary.500',
            borderWidth: '2px',
          }}
        />
      </Box>
    </Center>
<<<<<<< HEAD
    </Animated.View>
=======
>>>>>>> parent of 12a10b5 (homepage added)
  );
};
