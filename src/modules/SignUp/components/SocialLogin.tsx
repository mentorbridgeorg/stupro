import {GoogleIcon} from '@assets/icons/GoogleIcon';
import {LinkedInIcon} from '@assets/icons/LinkedInIcon';
import {Flex} from 'native-base';
import React from 'react';

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
