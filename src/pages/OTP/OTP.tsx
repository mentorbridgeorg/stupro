import {OTPForm} from '@/modules/OTPForm/OTPForm';
import {FocusedCard} from '@organisms/FocusedCard';
import {Box, Text} from 'native-base';
import React from 'react';

export const OTP = () => {
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
          Enter OTP
        </Text>

        <Text fontSize="sm" fontWeight="semibold" mx="2" color="#0a678e" mb="4">
          You're almost there! Enter your OTP sent to your email.
        </Text>

        <OTPForm />
      </FocusedCard>
    </Box>
  );
};
