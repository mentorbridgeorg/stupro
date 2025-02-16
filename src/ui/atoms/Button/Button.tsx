import React from 'react';

import {Button as NativeBaseButton} from 'native-base';
import {ButtonProps} from './Button.types';

export const Button = ({onPress, children, isDisabled, style}: ButtonProps) => {
  return (
    <NativeBaseButton
      minWidth={'25%'}
      borderRadius={10}
      size={'sm'}
      _text={{
        fontSize: 'sm',
        fontWeight: 'bold',
      }}
      isDisabled={isDisabled}
      onPress={onPress}
      style={style}>
      {children}
    </NativeBaseButton>
  );
};
