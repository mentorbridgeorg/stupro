import {CancelIcon} from '@/assets/icons/CancelIcon';
import {CrossIcon} from '@/assets/icons/CrossIcon';
import {ErrorIcon} from '@/assets/icons/ErrorIcon';
import {Box, HStack, VStack, Icon, InfoIcon, Text} from 'native-base';
import React from 'react';
import {ToastProps} from './Toast.types';

export const Toast = ({type, title, description}: ToastProps) => {
  const toastStyles = {
    sucess: {
      bg: '#E5FFE8',
      color: '#11962C',
      textColor: '#38D958',
      icon: <CrossIcon />,
    },
    error: {
      bg: '#FDE1E4',
      color: '#AD1A18',
      textColor: '#D6193C',
      icon: <CancelIcon />,
    },
    warning: {
      bg: '#FEF4D2',
      color: '#F3C331',
      textColor: 'primary.500',
      icon: <ErrorIcon />,
    },
    info: {
      bg: '#D2EAFF',
      color: '#3195F3',
      textColor: '#1108B6',
      icon: <InfoIcon />,
    },
  };


  return (
    <Box
      bg={toastStyles[type].bg}
      p={4}
      borderRadius="20"
      shadow={2}
      width="120%"
      height="60"
      alignSelf="center"
      mt={4}
      // borderColor={toastStyles[type].color}
      >
      <HStack space={1}  alignItems="center">
        <Icon size="2xl">{toastStyles[type].icon}</Icon>
        <VStack  mb={4}>
          <Text fontWeight="bold" fontSize={16} color={toastStyles[type].textColor}>
            {title}
          </Text>
          <Text fontSize="12"  color="black">
            {description}
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
};
