import {Box, CheckIcon, FormControl, Select} from 'native-base';
import React, {useEffect, useRef} from 'react';
import {FormSelectProps} from './FormSelect.types';
import {Animated} from 'react-native';
export const FormSelect = ({
  options,
  onChange,
  isRequired = true,
  placeholder,
  label,
  selectedValue,
}: FormSelectProps) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Fade-in
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    // Fade-out
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
          {label && <FormControl.Label mb="2">{label}</FormControl.Label>}
          <Select
            minWidth="100%"
            size="lg"
            fontSize={'sm'}
            selectedValue={selectedValue}
            accessibilityLabel={placeholder}
            placeholder={placeholder}
            borderRadius={'15px'}
            borderColor={'primary.500'}
            color={'font.tertiary'}
            borderWidth={'2px'}
            padding={3}
            _selectedItem={{
              bg: 'primary.500',
              endIcon: <CheckIcon size="5" color="primary.500" />,
            }}
            mt={1}
            onValueChange={onChange}>
            {options.map(option => (
              <Select.Item
                key={option.value}
                label={option.label}
                value={option.value}
              />
            ))}
          </Select>
        </FormControl>
      </Box>
    </Animated.View>
  );
};
