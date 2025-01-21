import {PropsWithChildren} from 'react';
import {KeyboardTypeOptions} from 'react-native';

export interface InputTextProps extends PropsWithChildren {
  placeholder: string;
  keyboardType?: KeyboardTypeOptions;
}
