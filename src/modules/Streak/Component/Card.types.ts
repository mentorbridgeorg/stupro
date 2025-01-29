import { CheckIcon } from '@/src/assets/icons/CheckIcon';
import { CrossIcon } from '@/src/assets/icons/CrossIcon';
import {ReactElement, ReactNode} from 'react';

export interface CardProps {
  label?: ReactNode;
  bgColor: String;
  textColor: String;
  
  days: {day: String}[];
  
  
 
}
