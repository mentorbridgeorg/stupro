import {Box, FormControl, Input} from 'native-base';
import React from 'react';
import {FormInputProps} from './FormInput.types';

export const FormInput = ({
  label,
  type = 'text',
  placeholder,
  onChange,
  isRequired = true,
  icon,
  rightIcon,
  helperText,
  value,
}: FormInputProps) => {
  return (
    <Box w="100%">
      <FormControl isRequired={isRequired}>
        {label && <FormControl.Label mb="2">{label}</FormControl.Label>}
        <Input
          type={type}
          size="lg"
          color={'font.tertiary'}
          placeholder={placeholder}
          w="100%"
          fontSize={'sm'}
          borderRadius={'10px'}
          borderColor={'primary.500'}
          borderWidth={'1px'}
          onChangeText={onChange}
          InputLeftElement={icon}
          InputRightElement={rightIcon}
          value={value}
          _focus={{
            borderColor: 'primary.500',
            borderWidth: '2px',
          }}
        />
        {helperText && (
          <FormControl.HelperText>{helperText}</FormControl.HelperText>
        )}
      </FormControl>
    </Box>
  );
};
