import {Icon} from 'native-base';
import React from 'react';
import {Path} from 'react-native-svg';

export const PasswordIcon = () => {
  return (
    <Icon ml="2" color={'font.tertiary'}>
      <Path
        d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </Icon>
  );
};
