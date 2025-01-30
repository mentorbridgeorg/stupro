import React from 'react';

import {Button as NativeBaseButton} from 'native-base';
import {ButtonProps} from './Button.types';

export const Button = ({onPress, children, isDisabled}: ButtonProps) => {
  return (
    <NativeBaseButton
      width={'50%'}
      borderRadius={10}
      _text={{
        fontSize: 'md',
        fontWeight: 'bold',
        marginLeft: '0',
      }}
      isDisabled={isDisabled}
      onPress={onPress}>
      {children}
    </NativeBaseButton>
  );
};
