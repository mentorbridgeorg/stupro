import {Box, FormControl, Input} from 'native-base';
import React, {useEffect, useRef} from 'react';
import {Animated} from 'react-native';
import {FormInputProps} from './FormInput.types';
export const FormInput = ({
  label,
  type = 'text',
  placeholder,
  onChange,
  isRequired = true,
  icon,
  rightIcon,
  helperText,
  value,
}: FormInputProps) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Fade-in animation
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    // Fade-out animation
    return () => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    };
  }, [fadeAnim]);

  return (
    <Animated.View
      style={{
        opacity: fadeAnim,
      }}>
      <Box w="100%">
        <FormControl isRequired={isRequired}>
          {label && (
            <FormControl.Label mb="2" _text={{color: 'primary.500'}}>
              {label}
            </FormControl.Label>
          )}
          <Input
            type={type}
            size="lg"
            color={'font.tertiary'}
            placeholder={placeholder}
            w="100%"
            fontSize={'sm'}
            borderRadius={'15px'}
            borderColor={'primary.500'}
            borderWidth={'2px'}
            padding={3}
            onChangeText={onChange}
            InputLeftElement={icon}
            InputRightElement={rightIcon}
            value={value}
            _focus={{
              borderColor: 'primary.500',
              borderWidth: '2px',
            }}
          />
          {helperText && (
            <FormControl.HelperText>{helperText}</FormControl.HelperText>
          )}
        </FormControl>
      </Box>
    </Animated.View>
  );
};
