import {PropsWithChildren} from 'react';

export interface DropdownProps extends PropsWithChildren {
  selectedValue: string;
  minWidth?: number | string;
  placeholder: string;
  onValueChange: (itemValue: string) => void;
  options: {label: string; value: string}[];
}
