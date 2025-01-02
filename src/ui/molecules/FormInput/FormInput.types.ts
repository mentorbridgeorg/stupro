import {ReactElement, ReactNode} from 'react';

export interface FormInputProps {
  label?: ReactNode;
  placeholder: string;
  onChange: (value: string) => void;
  isRequired?: boolean;
  icon?: ReactElement;
  type?: 'text' | 'password' | undefined;
  rightIcon?: ReactElement;
  helperText?: ReactNode;
  value?: string;
}
