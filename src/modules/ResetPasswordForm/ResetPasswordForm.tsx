
import { FormInput } from '../../ui/molecules/FormInput';
import { EyeSlashIcon } from '../../assets/icons/EyeSlashIcon';
// import { EyeIcon } from '../../assets/icons/EyeIcon';
import { PasswordIcon } from '../../assets/icons/PasswordIcon';
import { Box, Center, FormControl, Pressable } from 'native-base';
import  React, { useState } from 'react';
import { PasswordPattern } from '../SignUp/components/helpers/PasswordPattern';
import { EyeIcon } from '../../assets/icons/EyeIcon';
import { Button } from '../../ui/atoms/Button';

export const ResetPasswordForm = () => {
    //  const [resetPaswordData, setResetPassword] = useState({
    //     email: '',
    //     password: '',
    //   });
      const [showPassword, setShowPassword] = useState(false);
  return(
    <>
    <Box w="80%">
    <Box mb="5">
       <FormControl isRequired>
       <FormInput
            label="Password"
            type={showPassword ? 'text' : 'password'}
            isRequired
            icon={<PasswordIcon />}
            value={''}
            onChange={()=>{}
            }
            rightIcon={
              <Pressable onPress={() => setShowPassword(!showPassword)}>
                {showPassword ? <EyeIcon /> : <EyeSlashIcon />}
              </Pressable>
            }
            placeholder="New Password"
            helperText={<PasswordPattern />}
          />
       </FormControl>
       <FormControl isRequired>
       <FormInput
            label="Password"
            type={showPassword ? 'text' : 'password'}
            isRequired
            icon={<PasswordIcon />}
            value={''}
            onChange={()=>{}
            }
            rightIcon={
              <Pressable onPress={() => setShowPassword(!showPassword)}>
                {showPassword ? <EyeIcon /> : <EyeSlashIcon />}
              </Pressable>
            }
            placeholder="Confirm Password"
          />
       </FormControl>
    </Box>
    <Center>
    <Button onPress={()=>{}}>Submit</Button>
    </Center>
    </Box>
    </>
  );
};
