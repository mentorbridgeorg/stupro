import {EyeIcon} from '@assets/icons/EyeIcon';
import {EyeSlashIcon} from '@assets/icons/EyeSlashIcon';
import {PasswordIcon} from '@assets/icons/PasswordIcon';
import {Button} from '@atoms/Button';
import {FormInput} from '@molecules/FormInput';
import {PasswordPatternList} from '@molecules/PasswordPatternList';
import {useAtom} from 'jotai';
import {Box, Center, Pressable, Stack, Text} from 'native-base';
import React, {useState} from 'react';
import {REGISTER_ENDPOINT} from '../../../api/endpoints';
import {sendData} from '../../../api/Post/sendData';
import {signUpDataAtom} from '../atoms';

export const SecureAccount = () => {
  const [signUpData, setSignUpData] = useAtom(signUpDataAtom);
  const [showPassword, setShowPassword] = useState(false);

  const handleContinue = () => {
    sendData(REGISTER_ENDPOINT, signUpData).then(response => {
      console.log(response);
    });
  };

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
        <Button onPress={handleContinue} isDisabled={!isValidPassword}>
          Continue
        </Button>
      </Box>
    </Box>
  );
};
