import { Box, Center, Text } from 'native-base';
import React from 'react';


interface CategoriesCardProps {
  topic: string; 
}

export const CategoriesCard = ({ topic }: CategoriesCardProps) => {
  return (
    <Center>
      <Box
        w={300}
        h={100}
        bg={'#FEFEFE'}
        borderRadius={15}
        mt={5}
        borderColor={'primary.500'}
        borderWidth={2}
        justifyContent="center"
        alignItems="center"
        shadow={3}
      >
        <Text fontSize="lg" fontWeight="bold" color="black">
          {`This is the ${topic} card`}
        </Text>
      </Box>
    </Center>
  );
};
