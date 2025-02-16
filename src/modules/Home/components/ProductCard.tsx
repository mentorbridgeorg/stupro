import {Box, HStack, IconButton, Image, Text, VStack} from 'native-base';
import React from 'react';

import styles from '@/ui/styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ProductData} from './ProductCard.types';
interface ProductCardProps {
  data: ProductData;
}

export const ProductCard = ({data}: ProductCardProps) => {
  const addToFavorites = () => {
    console.log('addToFavorites');
  };

  return (
    <Box
      marginBottom={5}
      mx={4}
      flexDirection="column"
      width={'100%'}
      shadow={3}
      borderRadius={10}
      overflow="hidden">
      <Box padding={5} bg={'primary.500'} justifyContent="center">
        <HStack space={2}>
          <Box
            marginLeft={2}
            borderWidth={2}
            borderBottomRadius={3}
            borderTopRadius={8}
            overflow="hidden"
            width={110}
            padding={2}
            height={20}>
            <Image
              source={{uri: data?.thumbnail?.url}}
              alt="Card Image"
              width="100%"
              height="100%"
              borderRadius={10}
              resizeMode="contain"
            />
          </Box>
          <VStack marginLeft={1}>
            <Text
              fontSize="16"
              fontWeight="bold"
              color="black"
              style={styles.textContent}>
              {data?.name}
            </Text>
            <Box width={'80%'}>
              <Text
                fontSize="12"
                mt={1}
                fontWeight="bold"
                color="muted.700"
                style={styles.textContent}>
                {data.tagline}
              </Text>
            </Box>
          </VStack>
          <IconButton
            onPress={addToFavorites}
            icon={
              <Ionicons
                name={data.isFavorite ? 'heart' : 'heart-outline'}
                size={18}
                color="red"
              />
            }
            padding={1}
            position="absolute"
            top="0"
            rounded="full"
            right="2"
            bg="white"
          />
        </HStack>
      </Box>
      <Box bg="#fafafa" shadow={3}>
        <VStack minHeight={50} py={5} px={3} mx={3} space={2}>
          <Text
            fontSize="12"
            fontWeight="bold"
            color="black"
            numberOfLines={2}
            ellipsizeMode="tail"
            lineHeight={18}
            style={styles.textContent}>
            {data.description}
          </Text>
          <HStack space={2}>
            {data?.tags.map(tag => (
              <Text
                key={tag?.slug}
                style={styles.textContent}
                fontSize="12"
                fontWeight="bold"
                color={'font.primary'}
                marginTop={1}>
                #{tag?.label}
              </Text>
            ))}
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
};
