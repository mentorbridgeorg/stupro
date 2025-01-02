import {PropsWithChildren} from 'react';

export interface IFocusedCardProps extends PropsWithChildren {
  imageSource?: string;
  isDisplayBackButton?: boolean;
  onBackButtonPress?: () => void;
}
