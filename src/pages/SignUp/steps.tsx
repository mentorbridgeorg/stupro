import {EmailInput} from '@/modules/SignUp/components/EmailInput';
import {NameDetails} from '@/modules/SignUp/components/NameDetails';
import {SecureAccount} from '@/modules/SignUp/components/SecureAccount';
import {UserDetails} from '@/modules/SignUp/components/UserDetails';
import {UserType} from '@/modules/SignUp/components/UserType';
import React from 'react';

export const steps = [
  {
    title: 'Email',
    image:
      'https://cdni.iconscout.com/illustration/premium/thumb/sign-up-illustration-download-in-svg-png-gif-file-formats--log-register-form-user-interface-pack-design-development-illustrations-6430773.png',
    component: <EmailInput />,
  },
  {
    title: 'Name Details',
    image:
      'https://cdni.iconscout.com/illustration/premium/thumb/sign-up-illustration-download-in-svg-png-gif-file-formats--log-register-form-user-interface-pack-design-development-illustrations-6430773.png',
    component: <NameDetails />,
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
  {
    title: 'Secure Your Account',
    image:
      'https://cdni.iconscout.com/illustration/premium/thumb/sign-up-illustration-download-in-svg-png-gif-file-formats--log-register-form-user-interface-pack-design-development-illustrations-6430773.png',
    component: <SecureAccount />,
  },
];
