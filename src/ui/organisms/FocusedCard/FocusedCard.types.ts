import {PropsWithChildren} from 'react';

export interface IFocusedCardProps extends PropsWithChildren {
  imageSource?: React.ReactNode;
  isDisplayBackButton?: boolean;
  onBackButtonPress?: () => void;
}
