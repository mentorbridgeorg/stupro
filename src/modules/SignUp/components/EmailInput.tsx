import {useAtom, useSetAtom} from 'jotai';
import {Box, FormControl, Stack, Text} from 'native-base';
import React from 'react';
import {EmailIcon} from '../../../assets/icons/EmailIcon';
import {Button} from '../../../ui/atoms/Button';
import {HDivider} from '../../../ui/atoms/HDivider';
import {FormInput} from '../../../ui/molecules/FormInput';
import {signUpDataAtom} from '../atoms';
import {currentStepAtom} from '../atoms/currentStepAtom';
import {SocialLogin} from './SocialLogin';
export const EmailInput = () => {
  const setCurrentStep = useSetAtom(currentStepAtom);
  const [signUpData, setSignUpData] = useAtom(signUpDataAtom);

  const isValidEmail =
    signUpData?.email !== '' &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(signUpData?.email);

  return (
    <Box>
      <Text
        fontSize={'3xl'}
        fontWeight={'bold'}
        color="font.primary"
        textAlign={'center'}>
        Sign Up
      </Text>
      <Box w="100%">
        <FormControl isRequired marginTop={'10'}>
          <Stack mx="10" w="80%">
            <FormInput
              placeholder="example@gmail.com"
              onChange={text => {
                setSignUpData({...signUpData, email: text});
              }}
              icon={<EmailIcon />}
            />
          </Stack>
        </FormControl>
        <Text
          fontSize={'sm'}
          color="font.primary"
          mx="10"
          mt="5"
          mb="7"
          fontWeight={'bold'}>
          By clicking continue, you agree to our Terms of Service and Privacy
          Policy.
        </Text>
        <Box alignItems="center" mb="5">
          <Button isDisabled={!isValidEmail} onPress={() => setCurrentStep(1)}>
            Continue
          </Button>
        </Box>
        <HDivider label="OR" />
        <SocialLogin />
      </Box>
    </Box>
  );
};
