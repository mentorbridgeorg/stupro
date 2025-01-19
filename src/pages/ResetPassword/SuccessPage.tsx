import {
    Alert,
    AspectRatio,
    Box,
    Center,
    HStack,
    Image,
    Text,
    VStack,
  } from 'native-base';
  import React from 'react';
  
  export const SuccessPage = () => {
    return (
      <Box alignItems="center" justifyContent="center" w="100%" px="5">
        <Center mt="5">
          <Text color="font.primary" fontSize="2xl" fontWeight="bold" mb="2">
            Success!
          </Text>
          <Alert w="100%" status="success">
            <VStack space={2} flexShrink={1} w="100%">
              <HStack flexShrink={1} space={2} justifyContent="space-between">
                <HStack space={2} flexShrink={1}>
                  <Alert.Icon mt="1" />
                  <Text fontSize="md" color="coolGray.800">
                    Your password has been changed successfully.
                  </Text>
                </HStack>
              </HStack>
            </VStack>
          </Alert>
        </Center>
        <Center px={'5'}>
          <AspectRatio ratio={9 / 16} width={'80%'} height={'400px'}>
            <Image
              size={'2xl'}
              source={{
                uri: 'https://img.freepik.com/free-vector/my-password-concept-illustration_114360-3864.jpg?uid=R179452634&ga=GA1.1.1792414021.1728454184&semt=ais_hybrid',
              }}
              alt="image"
            />
          </AspectRatio>
        </Center>
      </Box>
    );
  };