import {Box, Input} from 'native-base';
import React from 'react';
import {InputTextProps} from './InputText.types';

const TextInput = ({placeholder, keyboardType}: InputTextProps) => {
  return (
    <Input
      w="80%"
      placeholder={placeholder}
      p={3}
      borderRadius={15}
      keyboardType={keyboardType}
    />
  );
};
export default TextInput;
