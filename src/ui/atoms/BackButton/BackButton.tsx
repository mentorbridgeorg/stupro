import {ChevronLeftIcon} from '../../../assets/icons/ChervonLeftIcon';
import {Box, Center, Pressable} from 'native-base';
import React from 'react';
import {BackButtonProps} from './BackButton.types';

export const BackButton = ({onPress}: BackButtonProps) => {
  return (
    <Box
      bg="muted.50"
      p="5"
      ml="2"
      width={'5%'}
      height={'5%'}
      borderWidth="1"
      borderColor="primary.500"
      borderRadius="full"
      shadow={8}>
      <Pressable onPress={onPress}>
        <Center>
          <ChevronLeftIcon />
        </Center>
      </Pressable>
    </Box>
  );
};
