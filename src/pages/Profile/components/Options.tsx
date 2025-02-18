import {theme} from '@/theme';
import {ArrowRight} from '@assets/icons/ArrowRight';
import {Box, Pressable} from 'native-base';
import React from 'react';

const Options = ({Component, onPress, bg = theme.colors.primary[500]}: any) => {
  return (
    <Pressable
      bg={'#FFE0B2'}
      p={3}
      mt={4}
      borderRadius={15}
      marginX={5}
      flexDirection="row"
      justifyContent="space-between"
      onPress={onPress}>
      <Box
        marginX={3}
        _text={{fontSize: 'xl', fontWeight: 'bold', color: 'black'}}>
        {Component}
      </Box>
      <Box alignSelf={'center'}>
        <ArrowRight />
      </Box>
    </Pressable>
  );
};
export default Options;
