import {Box, CheckIcon, FormControl, Select} from 'native-base';
import React from 'react';
import {FormSelectProps} from './FormSelect.types';

export const FormSelect = ({
  options,
  onChange,
  isRequired = true,
  placeholder,
  label,
}: FormSelectProps) => {
  return (
    <Box w="100%">
      <FormControl isRequired={isRequired}>
        {label && <FormControl.Label mb="2">{label}</FormControl.Label>}
        <Select
          minWidth="100%"
          size="lg"
          fontSize={'sm'}
          accessibilityLabel={placeholder}
          placeholder={placeholder}
          borderRadius={'10px'}
          borderColor={'primary.500'}
          color={'font.tertiary'}
          borderWidth={'1px'}
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
  );
};
