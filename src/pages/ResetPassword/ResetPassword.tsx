import {Box, Text} from 'native-base';
// import {ResetPasswordForm} from '../../modules/ResetPasswordForm';
import {FocusedCard} from '../../ui/organisms/FocusedCard';
import React from 'react';
import { ResetPasswordForm } from '../../modules/ResetPasswordForm';

export const ResetPassword = () => {
  return (
    <>
      <Box>
        <FocusedCard>
          <Text fontSize="2xl" fontWeight="bold" color="font.primary" mb="2">
            Reset Password
          </Text>
          <ResetPasswordForm/>
        </FocusedCard>
      </Box>
    </>
  );
};
