import React from 'react';
import {
  Box,
  HStack,
  Image,
  NativeBaseProvider,
  Text,
  VStack,
} from 'native-base';
import {ProductData} from './ProductCard.types';
import {BookMarkIcon} from '@/assets/icons/BookMarkIcon';
interface ProductCardProps {
  data: ProductData;
}

export const ProductCard = ({data}: ProductCardProps) => {
  return (
    <NativeBaseProvider>
      <Box
        flexDirection="column"
        borderColor="black"
        borderWidth={1}
        width={350}
        height={220}
        borderRadius={15}
        overflow="hidden">
        <Box flex={1} bg="amber.400" justifyContent="center">
          <HStack space={2}>
            <Box
              marginLeft={2}
              borderWidth={2}
              borderColor="black"
              borderBottomRadius={3}
              borderTopRadius={8}
              borderBottomWidth={8}
              overflow="hidden"
              width={110}
              height={20}>
              <Image
                source={{uri: data.imageUri}}
                alt="Card Image"
                width="100%"
                height="100%"
                resizeMode="cover"
              />
            </Box>

            <Text
              fontSize="16"
              fontWeight="bold"
              color="black"
              marginTop={6}
              marginLeft={5}>
              AI ChatBot
            </Text>
          </HStack>
        </Box>
        <Box flex={1} bg="#fff">
          <Text fontSize="10" marginLeft={5} marginTop={6}>
            Artificial Intelligence is reshaping our world, dramatically
            altering numerous sectors and influencing.
          </Text>
          <VStack>
            <HStack space={7}>
              <Box
                bgColor="amber.400"
                w={70}
                h={7}
                borderRadius={7}
                marginLeft={210}
                marginTop={2}>
                <Text
                  fontSize="10"
                  fontWeight="bold"
                  color="black"
                  marginTop={1}
                  marginLeft={5}>
                  Python
                </Text>
              </Box>
              <Box marginTop={3}>
                <BookMarkIcon />
              </Box>
            </HStack>
          </VStack>
        </Box>
      </Box>
    </NativeBaseProvider>
  );
};
