import React, {Component} from 'react';
import {Pressable, Box} from 'native-base';
import {ArrowRight} from '../../../assets/icons/ArrowRight';

const Options = ({Component, onPress}: any) => {
  return (
    <Pressable
      marginX={4}
      backgroundColor={'yellow.200'}
      p={3}
      borderRadius={15}
      flexDirection="row"
      justifyContent="space-between"
      onPress={onPress}>
      <Box
        marginX={5}
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
