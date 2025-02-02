import {SearchIcon} from '@assets/icons/SearchIcon';
import {Box, Center, Input} from 'native-base';
import React, {useEffect, useRef} from 'react';
import {Animated} from 'react-native';

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
    <Animated.View
      style={{
        opacity: fadeAnim,
      }}>
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
    </Animated.View>
  );
};
