import {Box, HStack, Text} from 'native-base';
import React from 'react';
export const TrendTopic = () => {
  return (
    <Box>
      <HStack space={4} alignItems="center">
        <Box
          size="50px"
          bg="yellow.200"
          borderRadius="20"
          width="70"
          height="8"
          borderColor="yellow.200"
          borderWidth={1}
          shadow={2}
          _text={{
            fontSize: '12',
            color: 'font.primary',
            alignItems: 'center',
            marginTop: 2,
            marginLeft: 5,
          }}>
          All
        </Box>
        <Box
          size="50px"
          bg="#FEF4D2"
          borderRadius="20"
          width="70"
          height="8"
          borderColor="#FEF4D2"
          borderWidth={1}
          shadow={2}>
          <Text
            fontSize="12"
            color="font.primary"
            alignItems="center"
            marginTop={2}
            marginLeft={4}>
            coding
          </Text>
        </Box>
        <Box
          size="50px"
          bg="#FEF4D2"
          borderRadius="20"
          width="70"
          height="8"
          borderColor="#FEF4D2"
          borderWidth={1}
          shadow={2}>
          <Text
            fontSize="12"
            color="font.primary"
            alignItems="center"
            marginTop={2}
            marginLeft={3}>
            interview{' '}
          </Text>
        </Box>
        <Box
          size="50px"
          bg="#FEF4D2"
          borderRadius="20"
          width="70"
          height="8"
          borderColor="#FEF4D2"
          borderWidth={1}
          shadow={2}>
          <Text
            fontSize="12"
            color="font.primary"
            alignItems="center"
            marginTop={2}
            marginLeft={4}>
            Science
          </Text>
        </Box>
        <Box
          size="50px"
          bg="#FEF4D2"
          borderRadius="20"
          width="70"
          height="8"
          borderColor="#FEF4D2"
          borderWidth={1}
          shadow={2}>
          <Text
            fontSize="12"
            color="font.primary"
            alignItems="center"
            marginTop={2}
            marginLeft={4}>
            Database{' '}
          </Text>
        </Box>
      </HStack>
    </Box>
  );
};
