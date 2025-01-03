import React from 'react';
import {ChangePasswordForm} from '../../modules/ChangePasswordForm/ChangePasswordForm';
import {Box, HStack, Text} from 'native-base';
import {BackButton} from '../../ui/atoms/BcakButton';

export const ChangePassword = () => {
  return (
    <Box>
      <HStack mt="5">
        <BackButton onPress={() => {}} />
        <Text fontSize="2xl" fontWeight="bold" color="font.primary" mt="6" ml="5" >
          Change Password
        </Text>
      </HStack>
      <ChangePasswordForm />
    </Box>
  );
};
