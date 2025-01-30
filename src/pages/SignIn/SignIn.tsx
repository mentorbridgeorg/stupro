import {Box, Text} from 'native-base';
import React from 'react';
import {SignInForm} from '../../modules/SignInForm/SignInForm';
import {SocialLogin} from '../../modules/SignUp/components/SocialLogin';
import {HDivider} from '../../ui/atoms/HDivider';
import {FocusedCard} from '../../ui/organisms/FocusedCard';
import {CreateNewAccount} from './components/CreateNewAccount';

export const SignIn = () => {
  return (
    <Box>
      <FocusedCard
        imageSource={
          'https://cdni.iconscout.com/illustration/premium/thumb/sign-up-illustration-download-in-svg-png-gif-file-formats--log-register-form-user-interface-pack-design-development-illustrations-6430773.png'
        }
        onBackButtonPress={() => {}}
        isDisplayBackButton={false}>
        <Text fontSize="2xl" fontWeight="bold" color="font.primary" mb="2">
          Welcome Back
        </Text>
        <SignInForm />
        <HDivider label="OR" />
        <SocialLogin />
        <CreateNewAccount />
      </FocusedCard>
    </Box>
  );
};
