import {Box, Center, HStack, Image, Pressable, Text} from 'native-base';
import React from 'react';
import {View} from 'react-native';
import {ChevronIcon} from '../../../assets/icons/ChevronIcon';
import {IFocusedCardProps} from './FocusedCard.types';

export const FocusedCard = ({
  imageSource,
  children,
  isDisplayBackButton,
  onBackButtonPress,
}: IFocusedCardProps) => {
  return (
    <View>
      <Box bg="primary.500" w="100%" h="100%">
        <HStack
          px="1"
          py="3"
          justifyContent="space-between"
          alignItems="center"
          w="100%"
          maxW="350">
          <Box>
            {isDisplayBackButton && (
              <Pressable onPress={onBackButtonPress}>
                <ChevronIcon />
              </Pressable>
            )}
          </Box>
          <Center>
            <Box textAlign="center">
              <Text
                fontSize={'3xl'}
                ml={isDisplayBackButton ? '50px' : '75px'}
                fontWeight={'bold'}
                color={'white'}>
                ST2PRO
              </Text>
            </Box>
          </Center>
          <Box />
        </HStack>
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
