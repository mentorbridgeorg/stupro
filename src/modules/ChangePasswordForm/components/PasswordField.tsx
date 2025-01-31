<<<<<<< HEAD
import {EyeIcon} from '@assets/icons/EyeIcon';
import {EyeSlashIcon} from '@assets/icons/EyeSlashIcon';
import {PasswordIcon} from '@assets/icons/PasswordIcon';
import {FormInput} from '@molecules/FormInput';
import {Box, Pressable} from 'native-base';
import React, {useState} from 'react';
import {PasswordFieldProps} from './PasswordField.types';
=======
import {EyeIcon} from '../../../assets/icons/EyeIcon';
import {EyeSlashIcon} from '../../../assets/icons/EyeSlashIcon';
import {PasswordIcon} from '../../../assets/icons/PasswordIcon';
import {Box,Pressable} from 'native-base';
import React, {useState} from 'react';
import {PasswordFieldProps} from './PasswordField.types';
import {FormInput} from '../../../ui/molecules/FormInput';
>>>>>>> parent of 4820360 (homepage add)

export const PasswordField = ({
  label,
  placeholder,
  onChange,
  value,
  helperText,
}: PasswordFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
<<<<<<< HEAD
    <Box  w="100%" mt="5">
=======
    <Box mt="5">
>>>>>>> parent of 4820360 (homepage add)
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
