import {CheckIcon, Select} from 'native-base';
import React from 'react';
import {DropdownProps} from './Dropdown.types';

const Dropdown = ({
  selectedValue,
  minWidth = '80%',
  placeholder,
  onValueChange,
  options,
}: DropdownProps) => {
  return (
    <Select
      selectedValue={selectedValue}
      minWidth={minWidth}
      defaultValue={selectedValue}
      accessibilityLabel={placeholder}
      placeholder={placeholder}
      // _selectedItem={{
      //   _text: {children: selectedValue},
      //   endIcon: <CheckIcon size={5} />,
      // }}
      onValueChange={onValueChange}
      borderRadius={10}
      p={3}>
      {options.map((option: any) => (
        <Select.Item
          key={option.value}
          label={option.label}
          value={option.value}
        />
      ))}
    </Select>
  );
};

export default Dropdown;
