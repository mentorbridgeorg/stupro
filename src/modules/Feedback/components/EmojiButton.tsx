import {Box, Pressable, Text} from 'native-base';
import {ColorType} from 'native-base/lib/typescript/components/types';
import React from 'react';
import {EmojiButtonProps} from './EmojiButton.types';

export const EmojiButton = ({
  label,
  isSelected,
  icon,
  onPress,
  color,
  bgColor,
}: EmojiButtonProps) => {
  return (
    <Pressable onPress={onPress}>
      <Box
        width={'60'}
        height={'70'}
        rounded="lg"
        overflow="hidden"
        borderWidth="1"
        colorScheme={isSelected ? 'white' : color}
        borderColor={isSelected ? bgColor : color}
        backgroundColor={isSelected ? color : (bgColor as ColorType)}
        alignItems={'center'}
        justifyContent="center"
        borderRadius="10"
        shadow="9">
        {icon(isSelected ? 'white' : color)}
        <Text color={isSelected ? 'white' : 'font.primary'} fontSize="10" fontWeight="bold">
          {label}
        </Text>
      </Box>
    </Pressable>
  );
};
