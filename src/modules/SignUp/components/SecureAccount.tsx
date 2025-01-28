import {EyeIcon} from '@assets/icons/EyeIcon';
import {EyeSlashIcon} from '@assets/icons/EyeSlashIcon';
import {PasswordIcon} from '@assets/icons/PasswordIcon';
import {Button} from '@atoms/Button';
import {FormInput} from '@molecules/FormInput';
import {PasswordPatternList} from '@molecules/PasswordPatternList';
import {useAtom} from 'jotai';
import {Box, Center, Pressable, Stack, Text} from 'native-base';
import React, {useEffect, useState} from 'react';
import {signUpDataAtom} from '../atoms';
import axios from 'axios';

export const SecureAccount = () => {
  const [signUpData, setSignUpData] = useAtom(signUpDataAtom);
  const [isSendPressed, setSendPressed] = useState(false);
 const [showPassword, setShowPassword] = useState(false);




  const handleContinue = () => {
    axios
      .post('http://localhost:8080/signup', signUpData)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    // console.log('signUpData', signUpData);
  };
        
  useEffect(() => {
    if (isSendPressed) {
      handleContinue();
    }
  });

  const isValidPassword =
    signUpData?.userDetails?.password?.length >= 8 &&
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).*$/.test(
      signUpData.userDetails.password,
    );

  return (
    <Box>
      <Text
        fontSize={'3xl'}
        fontWeight={'bold'}
        color="font.primary"
        textAlign={'center'}>
        Secure Your Account
      </Text>
      <Center mt="5">
        <Stack>
          <FormInput
            label="Password"
            type={showPassword ? 'text' : 'password'}
            isRequired
            icon={<PasswordIcon />}
            value={signUpData?.userDetails?.password}
            onChange={value =>
              setSignUpData({
                ...signUpData,
                userDetails: {...signUpData.userDetails, password: value},
              })
            }
            rightIcon={
              <Pressable onPress={() => setShowPassword(!showPassword)}>
                {showPassword ? <EyeIcon /> : <EyeSlashIcon />}
              </Pressable>
            }
            placeholder="Enter Password"
            helperText={
              <PasswordPatternList
                password={signUpData?.userDetails?.password}
              />
            }
          />
        </Stack>
      </Center>
      <Box alignItems="center" mb="5" mt="5">

        <Button onPress={()=>setSendPressed(true)} isDisabled={!isValidPassword}>


          Continue
        </Button>
      </Box>
    </Box>
  );
};
