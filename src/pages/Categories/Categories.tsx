import {CategoryForm} from '@/modules/Categories';
import {Box, Center, Text} from 'native-base';
import React from 'react';

export const Categories: React.FC = () => {
  return (
    <>
      <Center>
        <Text
          fontSize="2xl"
          marginTop={3}
          marginLeft={3}
          fontWeight="bold"
          color="font.primary">
          Explore Categories
        </Text>
      </Center>
      <CategoryForm />
      <Box />
    </>
  );
};
