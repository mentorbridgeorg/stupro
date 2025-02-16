import {EmailIcon} from '@assets/icons/EmailIcon';
import {Button} from '@atoms/Button';
import {HDivider} from '@atoms/HDivider';
import {signUpDataAtom} from '@modules/SignUp/atoms';
import {currentStepAtom} from '@modules/SignUp/atoms/currentStepAtom';
import {FormInput} from '@molecules/FormInput';
import {useAtom, useSetAtom} from 'jotai';
import {Box, FormControl, Link, Stack, Text} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import {SocialLogin} from './SocialLogin';

export const EmailInput = () => {
  const setCurrentStep = useSetAtom(currentStepAtom);
  const [signUpData, setSignUpData] = useAtom(signUpDataAtom);

  const isValidEmail =
    signUpData?.email !== '' &&
    /^[a-zA-Z0-9_.+-]+@[a-zA_Z0-9]+\.[a-zA-Z0-9-.]+$/.test(signUpData?.email);

  return (
    <Box>
      <Text
        fontSize="3xl"
        fontWeight="bold"
        color="font.primary"
        textAlign="center">
        Sign Up
      </Text>
      <Box>
        <FormControl isRequired marginTop="10">
          <Stack mx="10" w="80%">
            <FormInput
              placeholder="example@gmail.com"
              onChange={text => setSignUpData({...signUpData, email: text})}
              icon={<EmailIcon />}
            />
          </Stack>
        </FormControl>
        <Box alignItems="center">
          <Text
            fontSize="sm"
            color="font.primary"
            mx="10"
            mt="5"
            mb="7"
            style={styles.link}
            fontWeight="bold">
            By clicking continue, you agree to our{' '}
            <Link
              colorScheme="primary.500"
              href="https://www.google.com"
              isExternal
              _text={{
                color: 'info.500',
                fontWeight: 'bold',
                marginTop: 5,
                marginBottom: -1,
              }}>
              Terms & Conditions
            </Link>{' '}
            and{' '}
            <Link
              colorScheme="primary.500"
              href="https://www.google.com"
              isExternal
              _text={{
                color: 'info.500',
                fontWeight: 'bold',
                marginTop: 5,
                marginBottom: -1,
              }}>
              Privacy Policy
            </Link>
            .
          </Text>
        </Box>
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

const styles = StyleSheet.create({
  link: {
    color: 'font.primary !important',
    fontWeight: 'bold',
  },
});
