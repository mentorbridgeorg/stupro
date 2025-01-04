import { Box, Text, Input, Button } from 'native-base';
import React from 'react';
import { FocusedCard } from '../../ui/organisms/FocusedCard';
import {ForgotPasswordForm } from '../../modules/ForgotPasswordForm/ForgotPasswordForm';

export const ForgotPassword = () => {
  return (
    <Box>
      <FocusedCard 
       imageSource="https://cdni.iconscout.com/illustration/premium/thumb/forgot-password-mobile-illustration-download-in-svg-png-gif-file-formats--security-access-lock-user-interface-pack-design-development-illustrations-6430775.png?f=webp"
        onBackButtonPress={() => {}}
        isDisplayBackButton={false}

      >

        <Text fontSize="2xl" fontWeight="bold" m="4" color="font.primary" mb="5">
          Forgot Password?
        </Text>

      
        <Text fontSize="sm" fontWeight="semibold" mx='2'  color= '#0a678e' mb="4">
          Don’t worry! Please enter the correct email address.
        </Text>

      
              <ForgotPasswordForm />
       
      </FocusedCard>
    </Box>
  );
};
