import React from 'react';
import { Box, Text, View } from 'native-base';
import { SharedElement } from 'react-navigation-shared-element';

const Detail = () => {
  return (
    <View>
    <Box flex={1} justifyContent="center" alignItems="center">
      <SharedElement id="sharedCard">
        <Box p="4" w="100%" h="100%" bg="emerald.300">
          <Text fontSize="lg" color="white">This is the expanded card</Text>
        </Box>
      </SharedElement>
    </Box>
    </View>
  );
};

Detail.sharedElements = () => {
  return [{ id: 'sharedCard' }];
};

export default Detail;
