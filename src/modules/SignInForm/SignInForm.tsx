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

  useEffect(() => {
    if (isSendPressed) {
      handleSubmit();
    }
  });
  const handleSubmit = () => {
    axios
      .post('http://localhost:8080/signin', signInData)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

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
        <Button onPress={() => setSendPressed(true)} isDisabled={false}>
          Continue
        </Button>
      </Box>
    </Box>
  );
};
