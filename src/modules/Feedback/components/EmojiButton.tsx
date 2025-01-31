import {Box, Icon, Pressable, Text} from 'native-base';
import {ColorType} from 'native-base/lib/typescript/components/types';
import React from 'react';
import {EmojiButtonProps} from './EmojiButton.types';

export const EmojiButton = ({
  label,
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
        borderColor={color as ColorType}
        backgroundColor={bgColor as ColorType}
        alignItems={'center'}
        justifyContent="center"
        borderRadius="10"
        shadow="9">
        <Icon as={icon} />
        <Text color="font.primary" fontSize="10" fontWeight="bold">
          {label}
        </Text>
      </Box>
    </Pressable>
  );
};
