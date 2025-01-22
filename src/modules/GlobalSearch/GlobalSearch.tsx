import {SearchIcon} from '@assets/icons/SearchIcon';
import {Box, Center, Input} from 'native-base';
import React from 'react';

export const GlobalSearch = () => {
  return (
    <Center>
      <Box width="80%">
        <Input
          placeholder="Search People & Places"
          width="100%"
          color={'font.tertiary'}
          fontWeight={'bold'}
          borderRadius="50"
          py="3"
          px="1"
          borderColor={'primary.500'}
          borderWidth={'1px'}
          InputLeftElement={<SearchIcon />}
          _focus={{
            borderColor: 'primary.500',
            borderWidth: '2px',
          }}
        />
      </Box>
    </Center>
  );
};
