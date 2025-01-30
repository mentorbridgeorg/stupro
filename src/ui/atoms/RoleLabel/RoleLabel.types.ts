import {PropsWithChildren} from 'react';

export interface RoleLabelProps extends PropsWithChildren {
  bg: () => string | undefined;
  Component: any;
}
