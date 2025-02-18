import {Feedback} from '@modules/Feedback';
import {Box, Center, Text} from 'native-base';
import React from 'react';

export const FeedbackPage = () => {
  return (
    <Box bg="primary.500" flex={1}>
      <Center p="10">
        <Box
          mt="90"
          p="10"
          height={'400'}
          width={'330'}
          borderWidth={'2'}
          borderColor="#F3C331"
          alignItems="center"
          borderRadius="20"
          shadow={2}
          bg="#FEFEFE">
          <Text color={'font.primary'} fontWeight="bold" marginBottom={2}>
            How would you rate your Experience?
          </Text>
          <Feedback />
        </Box>
      </Center>
    </Box>
  );
};
