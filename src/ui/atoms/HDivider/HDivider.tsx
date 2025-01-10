import {Divider, Flex, Text} from 'native-base';
import React from 'react';

export const HDivider = ({label}: {label: string}) => {
  return (
    <Flex
      direction="row"
      alignItems="center"
      mb="5"
      w="100%"
      justifyContent="center">
      <Divider
        orientation="horizontal"
        thickness="2"
        w="40%"
        mx="auto"
        bg="primary.500"
      />
      <Text color={'font.primary'} fontWeight="bold">
        {label}
      </Text>
      <Divider
        orientation="horizontal"
        thickness="2"
        w="40%"
        mx="auto"
        bg="primary.500"
      />
    </Flex>
  );
};
