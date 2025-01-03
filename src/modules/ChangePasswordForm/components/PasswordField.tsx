import { EyeIcon } from '../../../assets/icons/EyeIcon';
import { EyeSlashIcon } from '../../../assets/icons/EyeSlashIcon';
import { PasswordIcon } from '../../../assets/icons/PasswordIcon';
import { Box, FormControl, Input, Pressable } from 'native-base';
import React, { useState } from 'react';
import { PasswordFieldProps } from './PasswordField.types';

export const PasswordField = ({label,placeholder,onChange,value}:PasswordFieldProps) => {
    const [showPassword, setShowPassword] = useState(false);
return(
    <Box mt="3">
    <FormControl isRequired >
     {label && <FormControl.Label mb="2">{label}</FormControl.Label>}
      <Input
        type={showPassword ? 'text' : 'password'}
        isRequired
        value={value}
        onChangeText={onChange}
        InputLeftElement={<PasswordIcon />}
        size="lg"
        color={'font.tertiary'}
        w="100%"
        fontSize={'sm'}
        borderRadius={'10px'}
        borderColor={'primary.500'}
        borderWidth={'1px'}
        _focus={{
          borderColor: 'primary.500',
          borderWidth: '2px',
        }}
        InputRightElement={
          <Pressable onPress={() => setShowPassword(!showPassword)}>
            {showPassword ? <EyeIcon /> : <EyeSlashIcon />}
          </Pressable>
        }
        placeholder={placeholder}
      />
    </FormControl>
  </Box>
);
};
