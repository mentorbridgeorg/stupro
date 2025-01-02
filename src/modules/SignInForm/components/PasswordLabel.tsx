import {Flex, FormControl, Link} from 'native-base';
import React from 'react';

export const PasswordLabel = () => {
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
        href="/forgot-password">
        Forgot Password?
      </Link>
    </Flex>
  );
};
