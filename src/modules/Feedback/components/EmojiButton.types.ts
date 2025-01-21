import {ReactElement, ReactNode} from 'react';

export interface EmojiButtonProps{
  label?: ReactNode;
  icon:ReactElement;
  onPress:()=>void;
  color:String;
  bgColor:String;
  value:String;
}
