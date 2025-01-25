import {EmailIcon} from '@assets/icons/EmailIcon';
import {EyeIcon} from '@assets/icons/EyeIcon';
import {EyeSlashIcon} from '@assets/icons/EyeSlashIcon';
import {PasswordIcon} from '@assets/icons/PasswordIcon';
import {Button} from '@atoms/Button';
import {FormInput} from '@molecules/FormInput';
import {Box, FormControl, Input, Pressable} from 'native-base';
import React, {useEffect, useState} from 'react';
import {PasswordLabel} from './components/PasswordLabel';
import axios from 'axios';

export const SignInForm = () => {
  const [signInData, setSignInData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isSendPressed, setSendPressed] = useState(false);

  const handleContinue = () => {
    axios
      .post('http://localhost:8080/signin', signInData)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const isValidEmail =
    signInData?.email !== '' &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(signInData?.email);

  const isValidPassword =
    signInData?.password?.length >= 8 &&
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).*$/.test(
      signInData.password,
    );

  useEffect(() => {
    if (isSendPressed) {
      handleContinue();
    }
  });
  return (
    <Box w="80%">
      <Box mb="5">
        <Box>
          <FormInput
            label="Email"
            placeholder="example@gmail.com"
            onChange={text => {
              setSignInData({...signInData, email: text});
            }}
            icon={<EmailIcon />}
          />
        </Box>
        <Box mt="3">
          <FormControl isRequired>
            <PasswordLabel />
            <Input
              type={showPassword ? 'text' : 'password'}
              isRequired
              value={signInData?.password}
              onChangeText={value =>
                setSignInData({
                  ...signInData,
                  password: value,
                })
              }
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
              placeholder="Enter Password"
            />
          </FormControl>
        </Box>
      </Box>
      <Box alignItems="center" mb="5" mt="5">
        <Button
          onPress={() => setSendPressed(true)}
          isDisabled={!isValidEmail && !isValidPassword}>
          Continue
        </Button>
      </Box>
    </Box>
  );
};
