import { EyeIcon } from '@assets/icons/EyeIcon';
import { EyeSlashIcon } from '@assets/icons/EyeSlashIcon';
import { PasswordIcon } from '@assets/icons/PasswordIcon';
import { FormInput } from '@molecules/FormInput';
import { Box, Pressable } from 'native-base';
import React, { useState } from 'react';
import { PasswordFieldProps } from './PasswordField.types';

export const PasswordField = ({
  label,
  placeholder,
  onChange,
  value,
  helperText,
}: PasswordFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Box  w="100%" mt="5">
      <FormInput
        label={label}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        type={showPassword ? 'text' : 'password'}
        helperText={helperText}
        icon={<PasswordIcon />}
        rightIcon={
          <Pressable onPress={() => setShowPassword(!showPassword)}>
            {showPassword ? <EyeIcon /> : <EyeSlashIcon />}
          </Pressable>
        }
      />
    </Box>
  );
};
