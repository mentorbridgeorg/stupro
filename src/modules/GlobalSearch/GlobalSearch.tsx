import {Box,  Input} from 'native-base';
import React from 'react';
import {SearchIcon} from '../../assets/icons/SearchIcon';

export const GlobalSearch = () => {
  return (
    <Box width="100%" p= '100' marginBottom={5} borderRadius="10">
      <Input
        placeholder="Search"
        width="100%"
        color="font.tertiary"
        fontWeight="bold"
        borderRadius="50"
        borderColor="black"
        borderWidth="1"
        InputLeftElement={<SearchIcon />}
        _focus={{
          borderColor: 'black',
          borderWidth: '2',
        }}
      />
    </Box>
    
  );
};
