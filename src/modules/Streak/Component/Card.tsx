import React from 'react';
import {Box, Center, VStack, Circle, Text, Checkbox, Image} from 'native-base';
import {CardProps} from './Card.types';

export const Card = ({label, bgColor, textColor, days}: CardProps) => {
  return (
    <Box
      alignItems="center"
      width="200"
      height="350"
      backgroundColor={bgColor}
      p={5}>
      <Text>
        {(days = 'day')}
      </Text>

      <Text mt={8} color={textColor}>
        {label}
      </Text>
    </Box>
  );
};
