import { Box, Center, FormControl, Pressable, Alert, HStack, Text, VStack } from 'native-base';
import React, { useState, useEffect } from 'react';
import { Button } from '../../ui/atoms/Button';
import { EyeIcon } from '../../assets/icons/EyeIcon';
import { EyeSlashIcon } from '../../assets/icons/EyeSlashIcon';
import { FormInput } from '../../ui/molecules/FormInput';
import { useAtom } from 'jotai';
import { resetPasswordFormAtom } from './atoms/PasswordForn';
import {PasswordPatternList} from '../../ui/molecules/PasswordPatternList';



export const ResetPasswordForm = () => {
  const [passwordData, setPasswordData] = useAtom(resetPasswordFormAtom);
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const isValidPassword =
    passwordData?.newPassword?.length >= 8 &&
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).*$/.test(
      passwordData.newPassword
    );

  const isPasswordsMatch = passwordData?.newPassword === passwordData?.confirmPassword;

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
  };

  return (
    <>
      <Box w="80%" p="5">
        <FormControl isRequired>
          <FormInput
            label="New Password"
            type={showPassword ? 'text' : 'password'}
            value={passwordData.newPassword}
            onChange={(value) => setPasswordData({ ...passwordData, newPassword: value })}
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
            onChange={(value) => setPasswordData({ ...passwordData, confirmPassword: value })}
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
          <Button onPress={handleSubmit} 
          isDisabled={!isValidPassword || !isPasswordsMatch}>
            Submit
          </Button>
        </Center>
      </Box>
    </>
  );
};
