import { Feedback } from '@modules/Feedback';
import ShareExample from '../../../ShareExample';
import { Box, Center, Text } from 'native-base';
import React from 'react';
import { View } from 'react-native';
import DeepLink from '../DeepLink/DeepLink';

export const FeedbackPage = ({data}: any) => {
  console.log('feedback:' , data);
  return (
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
        <Text color={'font.primary'} fontWeight="bold">
          How would you rate your Experience?
        </Text>
        <Feedback />
        <View style={{justifyContent:'center'}}>
        {/* <ShareExample /> */}
        <DeepLink data={data}/>
        </View>
      </Box>
    </Center>
  );
};
