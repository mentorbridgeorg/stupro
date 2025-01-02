import {ReactElement} from 'react';

export interface FormInputProps {
  label?: string;
  placeholder: string;
  onChange: (value: string) => void;
  isRequired?: boolean;
  icon?: ReactElement;
  type?: 'text' | 'password' | undefined;
}
