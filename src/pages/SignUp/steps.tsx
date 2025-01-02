import React from 'react';
import {EmailInput} from '../../modules/SignUp/components/EmailInput';
import {UserDetails} from '../../modules/SignUp/components/UserDetails';
import {UserType} from '../../modules/SignUp/components/UserType';

export const steps = [
  {
    title: 'Email',
    image:
      'https://cdni.iconscout.com/illustration/premium/thumb/sign-up-illustration-download-in-svg-png-gif-file-formats--log-register-form-user-interface-pack-design-development-illustrations-6430773.png',
    component: <EmailInput />,
  },
  {
    title: 'User Type',
    image:
      'https://cdni.iconscout.com/illustration/premium/thumb/sign-up-illustration-download-in-svg-png-gif-file-formats--log-register-form-user-interface-pack-design-development-illustrations-6430773.png',
    component: <UserType />,
  },
  {
    title: 'User Details',
    image:
      'https://cdni.iconscout.com/illustration/premium/thumb/sign-up-illustration-download-in-svg-png-gif-file-formats--log-register-form-user-interface-pack-design-development-illustrations-6430773.png',
    component: <UserDetails />,
  },
];
