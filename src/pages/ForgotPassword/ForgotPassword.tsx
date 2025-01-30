import {ForgotPasswordForm} from '@modules/ForgotPasswordForm';
import {FocusedCard} from '@organisms/FocusedCard';
import {Box, Text} from 'native-base';
import React from 'react';

export const ForgotPassword = () => {
  return (
    <Box>
      <FocusedCard
        imageSource="https://cdni.iconscout.com/illustration/premium/thumb/forgot-password-mobile-illustration-download-in-svg-png-gif-file-formats--security-access-lock-user-interface-pack-design-development-illustrations-6430775.png?f=webp"
        onBackButtonPress={() => {}}
        isDisplayBackButton={false}>
        <Text
          fontSize="2xl"
          fontWeight="bold"
          m="4"
          color="font.primary"
          mb="5">
          Forgot Password?
        </Text>

        <Text fontSize="sm" fontWeight="semibold" mx="2" color="#676F74" mb="4">
          Don’t worry! Please enter the correct email address.
        </Text>

        <ForgotPasswordForm />
      </FocusedCard>
    </Box>
  );
};
