import {ReactElement, ReactNode} from 'react';

export interface EmojiButtonProps {
  label?: ReactNode;
  icon: (color: string) => ReactElement;
  onPress: () => void;
  color: string;
  bgColor: string;
  isSelected: boolean;
}
