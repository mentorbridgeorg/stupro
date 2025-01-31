import {Box, Center, Text} from 'native-base';
import React from 'react';
import {Pressable} from 'react-native';
import {CategoriesProps} from './CardTopic.types';
export const CatgoriesTopic = ({label, onPress}: CategoriesProps) => {
  return (
    <Pressable onPress={onPress}>
      <Box
        w={100}
        h={10}
        bg={'primary.500'}
        borderRadius={20}
        marginLeft="4"
        marginTop={8}
        borderColor={'primary.800'}
        borderWidth={2}>
        <Center>
          <Text marginTop={2} marginRight={3} color={'black'}>
            {label}
          </Text>
        </Center>
      </Box>
    </Pressable>
  );
};
