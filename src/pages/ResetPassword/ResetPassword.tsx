import {ResetPasswordForm} from '@/modules/ResetPasswordForm';
import {FocusedCard} from '@organisms/FocusedCard';
import {Box, Text} from 'native-base';
import React from 'react';

export const ResetPassword = () => {
  return (
    <Box>
      <FocusedCard>
        <Text fontSize="2xl" fontWeight="bold" color="font.primary" mb="2">
          Reset Password
        </Text>
        <ResetPasswordForm />
      </FocusedCard>
    </Box>
  );
};
