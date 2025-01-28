import {ReactElement, ReactNode} from 'react';

export interface EmojiButtonProps {
  label?: ReactNode;
  icon: ReactElement;
  onPress: () => void;
  color: string;
  bgColor: string;
  value: number | null;
}
