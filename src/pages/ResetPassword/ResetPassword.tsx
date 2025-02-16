import {ResetPasswordForm} from '@modules/ResetPasswordForm';
import {FocusedCard, FocusedImage} from '@organisms/FocusedCard';
import {Box, Text} from 'native-base';
import React from 'react';

export const ResetPassword = () => {
  return (
    <Box>
      <FocusedCard
        imageSource={
          <FocusedImage imageSource="https://cdni.iconscout.com/illustration/premium/thumb/forgot-password-mobile-illustration-download-in-svg-png-gif-file-formats--security-access-lock-user-interface-pack-design-development-illustrations-6430775.png?f=webp" />
        }>
        <Text fontSize="2xl" fontWeight="bold" color="font.primary" mb="2">
          Reset Password
        </Text>
        <ResetPasswordForm />
      </FocusedCard>
    </Box>
  );
};
