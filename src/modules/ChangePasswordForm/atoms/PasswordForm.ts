import {atom} from 'jotai';
import { PasswordData } from '../PasswordData.types';

export const PasswordFormAtom = atom<PasswordData>({
 password:'',
 newPassword:'',
 confirmPassword:'',
});
