import {PropsWithChildren} from 'react';

export interface ButtonProps extends PropsWithChildren {
  onPress: () => void;
  isDisabled?: boolean;
  style?: any;
}
