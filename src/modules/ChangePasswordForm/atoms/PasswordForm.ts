import {atom} from 'jotai';
import {PasswordData} from '../PasswordData.types';

export const passwordFormAtom = atom<PasswordData>({
  password: '',
  newPassword: '',
  confirmPassword: '',
});
