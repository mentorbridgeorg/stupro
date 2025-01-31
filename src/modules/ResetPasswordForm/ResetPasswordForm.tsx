import {EyeIcon} from '@assets/icons/EyeIcon';
import {EyeSlashIcon} from '@assets/icons/EyeSlashIcon';
import {Button} from '@atoms/Button';
import {FormInput} from '@molecules/FormInput';
import {PasswordPatternList} from '@molecules/PasswordPatternList';
import {useAtom} from 'jotai';
import {
  Alert,
  Box,
  Center,
  FormControl,
  HStack,
  Pressable,
  Text,
  VStack,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import {resetPasswordFormAtom} from './atoms/PasswordForn';
import { updateData } from '@/api';

export const ResetPasswordForm = () => {
  const [passwordData, setPasswordData] = useAtom(resetPasswordFormAtom);
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const isValidPassword =
    passwordData?.newPassword?.length >= 8 &&
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).*$/.test(
      passwordData.newPassword,
    );

  const isPasswordsMatch =
    passwordData?.newPassword === passwordData?.confirmPassword;

  useEffect(() => {
    if (
      passwordData?.newPassword !== '' &&
      passwordData?.confirmPassword !== '' &&
      isValidPassword &&
      passwordData?.newPassword !== passwordData?.confirmPassword
    ) {
      setError('Passwords do not match');
    } else {
      setError(null);
    }
  }, [passwordData, isValidPassword]);

  const handleSubmit = () => {
    if (error === null && isValidPassword && isPasswordsMatch) {
      console.log('Password Reset Successful!');
    }
      updateData('http://ec2-35-87-21-24.us-west-2.compute.amazonaws.com:8092/resetPassword', passwordData)
          .then(function (response) {
            console.log(response);
          })



  };

  return (
    <Box w="80%" p="5">
      <FormControl isRequired>
        <FormInput
          label="New Password"
          type={showPassword ? 'text' : 'password'}
          value={passwordData.newPassword}
          onChange={value =>
            setPasswordData({...passwordData, newPassword: value})
          }
          rightIcon={
            <Pressable onPress={() => setShowPassword(!showPassword)}>
              {showPassword ? <EyeIcon /> : <EyeSlashIcon />}
            </Pressable>
          }
          placeholder="New Password"
        />
        <PasswordPatternList password={passwordData.newPassword} />
      </FormControl>

      <FormControl isRequired>
        <FormInput
          label="Confirm Password"
          type={showPassword ? 'text' : 'password'}
          value={passwordData?.confirmPassword}
          onChange={value =>
            setPasswordData({...passwordData, confirmPassword: value})
          }
          rightIcon={
            <Pressable onPress={() => setShowPassword(!showPassword)}>
              {showPassword ? <EyeIcon /> : <EyeSlashIcon />}
            </Pressable>
          }
          placeholder="Confirm Password"
        />
      </FormControl>

      {error && (
        <Box mt="3">
          <Alert w="100%" status="error">
            <VStack space={2} flexShrink={1} w="100%">
              <HStack flexShrink={1} space={2} justifyContent="space-between">
                <HStack space={2} flexShrink={1}>
                  <Alert.Icon mt="1" />
                  <Text fontSize="md" color="coolGray.800">
                    {error}
                  </Text>
                </HStack>
              </HStack>
            </VStack>
          </Alert>
        </Box>
      )}

      <Center mt="5">
        <Button
          onPress={handleSubmit}
          isDisabled={!isValidPassword || !isPasswordsMatch}>
          Submit
        </Button>
      </Center>
    </Box>
  );
};
