import {Alert, Box, HStack, Text, VStack} from 'native-base';
import React from 'react';

export const SuccessPage = () => {
  return (
    <Box alignItems="center" justifyContent="center" w="100%" px="5">
      <Alert w="100%" colorScheme="success">
        <VStack space={2} flexShrink={1} w="100%">
          <HStack
            flexShrink={1}
            space={2}
            alignItems="center"
            justifyContent="space-between">
            <HStack space={2} flexShrink={1} alignItems="center">
              <Alert.Icon />
              <Text>Thank You For your feedback!</Text>
            </HStack>
          </HStack>
        </VStack>
      </Alert>
    </Box>
  );
};
