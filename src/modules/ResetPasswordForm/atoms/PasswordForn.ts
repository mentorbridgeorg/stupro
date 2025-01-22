

import { atom } from 'jotai';
import { PasswordData } from '../PasswordData.types';

export const resetPasswordFormAtom = atom<PasswordData>({
  password: '', 
  newPassword: '',
  confirmPassword: '',
});


