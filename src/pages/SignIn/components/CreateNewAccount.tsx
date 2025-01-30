import {Flex, Link, Text} from 'native-base';
import React from 'react';

export const CreateNewAccount = () => {
  return (
    <Flex
      direction="row"
      alignItems="center"
      justifyContent="center"
      gap="2"
      mb="2">
      <Text fontSize="sm" color="font.tertiary" fontWeight="bold">
        Don't have an account?
      </Text>
      <Link
        _text={{
          color: 'font.primary',
          fontWeight: 'bold',
        }}
        href="/sign-up">
        Create New
      </Link>
    </Flex>
  );
};
