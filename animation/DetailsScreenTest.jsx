import React from 'react';
import { Box, Text, VStack } from 'native-base';

const DetailsScreenTest = () => (
      <Box
        flex={1}
        justifyContent="center"
        alignItems="center"
        w="100%"
        h="100%"
        bg="gray.100"
        p="4"
        shadow="2"
        rounded="lg"
      >
        <VStack space="4" alignItems="center">
          <Text fontSize="2xl" bold>
            The Garden City
          </Text>
          <Text fontSize="md" textAlign="center">
            Bengaluru is the center of India's high-tech industry. It is located
            in southern India on the Deccan Plateau and is known for its parks
            and nightlife.
          </Text>
        </VStack>
      </Box>
);

export default DetailsScreenTest;
