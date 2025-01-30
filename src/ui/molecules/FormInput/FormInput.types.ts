import {ReactElement, ReactNode} from 'react';

export interface FormInputProps {
  placeholder: string;
  onChange: (value: string) => void;
  isRequired?: boolean;
  icon?: ReactElement;
  type?: 'text' | 'password' | undefined;
  rightIcon?: ReactElement;
  helperText?: ReactNode;
  value?: string;
  label?: ReactNode;
}
