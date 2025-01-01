import {PropsWithChildren} from 'react';

export interface IFocusedCardProps extends PropsWithChildren {
  title: string;
  imageSource?: string;
}
