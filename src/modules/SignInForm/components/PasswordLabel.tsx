import {useNavigation} from '@react-navigation/native';
import {Flex, FormControl, Link} from 'native-base';
import React from 'react';

export const PasswordLabel = () => {
  const navigation = useNavigation();
  return (
    <Flex
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      mb="1">
      <FormControl.Label>Password</FormControl.Label>
      <Link
        _text={{
          color: 'font.primary',
          fontWeight: 'bold',
          textDecorationLine: 'none',
        }}
        onPress={() => {
          navigation.navigate('ForgotPassword' as never);
        }}>
        Forgot Password?
      </Link>
    </Flex>
  );
};
