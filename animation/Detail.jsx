import React from 'react';
import { Box, Text, View } from 'native-base';
import { SharedElement } from 'react-navigation-shared-element';

const Detail = () => {
  return (
    <View>
    <SharedElement id="sharedCard">
    <Box flex={1} justifyContent="center" alignItems="center">
        <View p="4" w="100%" h="100%" bg="emerald.300">
          <Text fontSize="lg" color="white">This is the expanded card</Text>
        </View>
    </Box>
    </SharedElement>
    </View>
  );
};

Detail.sharedElements = () => {
  return [{ id: 'id' }];
};

export default Detail;
