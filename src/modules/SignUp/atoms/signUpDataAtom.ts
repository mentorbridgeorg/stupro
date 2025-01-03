import {atom} from 'jotai';
import {SignUpData} from '../SignUp.types';

export const signUpDataAtom = atom<SignUpData>({
  email: '',
  userType: null,
  userDetails: {
    firstName: 'X',
    lastName: '',
    degree: '',
    college: '',
    designation: '',
    company: '',
    password: '',
  },
});
