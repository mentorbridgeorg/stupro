import {useAtom} from 'jotai';
import {Box, Center, Pressable, Stack, Text} from 'native-base';
import React, {useState} from 'react';
import {EyeIcon} from '../../../assets/icons/EyeIcon';
import {EyeSlashIcon} from '../../../assets/icons/EyeSlashIcon';
import {Button} from '../../../ui/atoms/Button';
import {FormInput} from '../../../ui/molecules/FormInput';
import {signUpDataAtom} from '../atoms';
import {PasswordPattern} from './helpers/PasswordPattern';
export const SecureAccount = () => {
  const [signUpData, setSignUpData] = useAtom(signUpDataAtom);
  const handleContinue = () => {
    console.log('signUpData', signUpData);
  };
  const isValidPassword =
    signUpData?.userDetails?.password?.length >= 8 &&
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).*$/.test(
      signUpData.userDetails.password,
    );
  const [showPassword, setShowPassword] = useState(false);

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
            helperText={<PasswordPattern />}
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
