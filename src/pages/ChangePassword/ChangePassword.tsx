import {BackButton} from '@atoms/BackButton';
import {ChangePasswordForm} from '@modules/ChangePasswordForm';
import {Box, HStack, Text} from 'native-base';
import React from 'react';

export const ChangePassword = () => {
  return (
    <Box mt="4">
      <HStack
        px="1"
        justifyContent="space-between"
        alignItems="center"
        w="100%">
        <BackButton onPress={() => {}} />
        <Text fontSize="2xl" fontWeight="bold" color="font.primary">
          Change Password
        </Text>
        <Box />
      </HStack>
      <ChangePasswordForm />
    </Box>
  );
};
