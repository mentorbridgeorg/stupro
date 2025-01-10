import { theme } from '../../theme';
import {Icon} from 'native-base';
import React from 'react';
import {Path} from 'react-native-svg';


export const ChevronLeftIcon = () => (
  <Icon width="15" height="15" viewBox="0 0 15 15" fill="none" size="4" >
    <Path
      fill-rule="evenodd"
      d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
       fill={theme.colors.font.tertiary}
    />
  </Icon>
);
