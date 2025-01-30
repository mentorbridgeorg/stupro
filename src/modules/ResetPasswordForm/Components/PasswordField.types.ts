import {ReactNode} from 'react';

export interface PasswordFieldProps{
  label?: ReactNode;
  placeholder: string;
  onChange: (value: string) => void;
  value?: string;
  helperText?: ReactNode;
}