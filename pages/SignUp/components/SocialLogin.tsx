import {Flex} from 'native-base';
import React from 'react';
import {GoogleIcon} from './GoogleIcon';
import {LinkedInIcon} from './LinkedInIcon';

export const SocialLogin = () => {
  return (
    <Flex
      direction="row"
      alignItems="center"
      mb="5"
      gap="5"
      justifyContent="center">
      <GoogleIcon />
      <LinkedInIcon />
    </Flex>
  );
};
