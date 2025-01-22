import {StyleSheet, Text, View} from 'react-native';
import React, {Children, Component} from 'react';
import {Box} from 'native-base';
import {RoleLabelProps} from './RoleLabel.types';

export const RoleLabel = ({bg, Component}: RoleLabelProps) => {
  return (
    <Box
      p="2"
      bg={bg}
      borderRadius={5}
      _text={{
        fontSize: 'md',
        fontWeight: 'medium',
        color: 'black',
        letterSpacing: 'md',
      }}>
      {Component}
    </Box>
  );
};
