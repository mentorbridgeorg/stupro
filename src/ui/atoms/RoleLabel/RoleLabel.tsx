import {Box} from 'native-base';
import React from 'react';
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
