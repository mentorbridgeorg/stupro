<<<<<<< HEAD
import {Button} from '@atoms/Button';
import {PasswordPatternList} from '@molecules/PasswordPatternList';
import {useAtom} from 'jotai';
import {Alert, Box, HStack, Text, VStack} from 'native-base';
import React, {useEffect, useState} from 'react';
=======
import {Alert, Box, HStack, Text, VStack} from 'native-base';
import React, {useEffect, useState} from 'react';
import {Button} from '../../ui/atoms/Button';
import {useAtom} from 'jotai';
import {PasswordPatternList} from '../../ui/molecules/PasswordPatternList';
>>>>>>> parent of 4820360 (homepage add)
import {passwordFormAtom} from './atoms/PasswordForm';
import {PasswordField} from './components';

export const ChangePasswordForm = () => {
  const [passwordData, setPassword] = useAtom(passwordFormAtom);
  const [error, setError] = useState<string | null>(null);
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

  return (
    <>
      <Box alignItems="center" p="10">
        <PasswordField
          placeholder="Current Password"
          label="Current Password"
          value={passwordData?.password}
          onChange={value => setPassword({...passwordData, password: value})}
        />
        <PasswordField
          placeholder="New Password"
          label="New Password"
          value={passwordData?.newPassword}
          onChange={value => setPassword({...passwordData, newPassword: value})}
          helperText={
            <PasswordPatternList password={passwordData?.newPassword} />
          }
        />
        <PasswordField
          placeholder="Confirm New Password"
          label="Confirm New Password"
          value={passwordData?.confirmPassword}
          onChange={value =>
            setPassword({...passwordData, confirmPassword: value})
          }
        />
      </Box>
      <Box px="10">
        {error && (
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
        )}
      </Box>
      <Box alignItems="center" mb="5" mt="5">
        <Button
          onPress={() => {}}
          isDisabled={!isValidPassword || !isPasswordsMatch}>
          Submit
        </Button>
      </Box>
    </>
  );
};
