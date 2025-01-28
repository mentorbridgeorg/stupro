import {Box, Center, HStack,Text} from 'native-base';
import React, { useState } from 'react';
import { Pressable } from 'react-native';
import { CategoriesProps } from './CardTopic.types';
import { CategoriesCard } from './CategoriesCard';
export const CatgoriesTopic = ({label,onPress}:CategoriesProps) => {
  
  return (
    <>
    <Pressable onPress={onPress}>
    <Box 
    w={100}
    h={10}

    bg={'primary.500'} 
    borderRadius={15} 
    marginLeft='4'  
    marginTop={8} 
    borderColor={'primary.700'} 
    borderWidth={2}>
   <Center>
     <Text marginTop={2}marginRight={3} color={'black'}>
      {label}
      </Text> 
    </Center>
    </Box>

    </Pressable>

    </>
  );
};

