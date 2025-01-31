import {ArrowRight} from '@/assets/icons/ArrowRight';
import {Box, HStack, Image, Text, VStack} from 'native-base';
import React from 'react';
import {ProductData} from './ProductCard.types';
import {TextList} from './TextCardList';

interface ProductCardProps {
  data: ProductData;
}

export const ProductCard = ({data}: ProductCardProps) => {
  return (
    <Box
      bg="#FDFAEC"
      width="380px"
      height="230px"
      p={4}
      borderTopRadius={10}
      borderBottomWidth={10}
      borderColor="black"
      borderWidth={4}
      shadow={50}>
      <HStack>
        <VStack>
          <HStack>
            <Image
              borderRadius={15}
              marginLeft={2}
              width={60}
              height={60}
              marginTop={1}
              source={{
                uri: data.imageUrl,
              }}
              alt="Card Image"
            />
            <Text
              fontSize="md"
              color="black"
              alignItems="center"
              fontWeight="bold"
              marginTop={5}
              marginLeft={5}>
              {data.title}
            </Text>
          </HStack>
          <VStack p={3} width={350} borderRadius={40}>
            <TextList />
          </VStack>

          <HStack space={2} marginBottom={30} marginLeft="300" marginTop={2}>
            <ArrowRight />
          </HStack>
        </VStack>
      </HStack>
    </Box>
  );
};
