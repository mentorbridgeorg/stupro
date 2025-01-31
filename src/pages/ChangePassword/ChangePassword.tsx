import {BackButton} from '@atoms/BackButton';
import {ChangePasswordForm} from '@modules/ChangePasswordForm';
import { useNavigation } from '@react-navigation/native';
import {Box, HStack, Text} from 'native-base';
import React from 'react';

export const ChangePassword = () => {
    const navigation = useNavigation();
  return (
    <Box mt="4">
      <HStack
        px="1"
        justifyContent="space-between"
        alignItems="center"
        w="100%">
       
       {/* button navi to profile */}
         <BackButton onPress={() => navigation.navigate('Profile' as never)} />
        
        <Text fontSize="2xl" fontWeight="bold" color="font.primary">
        Change Password
        </Text>
        <Box />
      </HStack>
      <ChangePasswordForm />
    </Box>
  );
};
