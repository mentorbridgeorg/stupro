import {Box, Center, Image, Text} from 'native-base';
import React from 'react';
import {View} from 'react-native';
import {IFocusedCardProps} from './FocusedCard.types';

export const FocusedCard = ({
  title,
  imageSource,
  children,
}: IFocusedCardProps) => {
  return (
    <View>
      <Box bg="primary.500" w="100%" h="100%">
        <Text
          marginTop={'25px'}
          fontSize={'3xl'}
          fontWeight={'bold'}
          color={'white'}
          textAlign={'center'}>
          {title}
        </Text>
        <Center marginTop={'100px'} paddingLeft={'25px'} paddingRight={'25px'}>
          <Image
            source={{
              uri: imageSource,
            }}
            alt="email"
            w="100%"
            h={'300px'}
          />
        </Center>
        <Center position="absolute" bottom={0} left={0} right={0}>
          <Box
            h="100%"
            w="100%"
            bg="muted.50"
            borderTopLeftRadius="50px"
            borderTopRightRadius="50px"
            p={4}
            justifyContent="center"
            alignItems="center">
            {children}
          </Box>
        </Center>
      </Box>
    </View>
  );
};
