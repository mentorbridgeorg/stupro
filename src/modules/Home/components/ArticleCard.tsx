import {Box, HStack, Image, Text, VStack} from 'native-base';
import React from 'react';
import {ArrowRight} from '../../../assets/icons/ArrowRight';
import {CardData} from './ArticleCard.types';

interface ArticleCardProps {
  data: CardData;
}

export function Card({data}: ArticleCardProps) {
  return (
    <Box
      bg="#FDFAEC"
      width="380px"
      height="220px"
      p={2}
      borderRadius="10"
      borderColor="black"
      borderWidth={2}
      shadow={2}>
      <HStack>
        <Image
          size={60}
          borderRadius={15}
          marginBottom={1}
          marginRight={1}
          width={460}
          height={100}
          source={{
            uri: data.imageUrl,
          }}
          alt="Card Image"
        />
      </HStack>
      <VStack>
        <Text
          fontSize="md"
          color="black"
          alignItems="center"
          fontWeight="bold"
          marginTop={1}
          marginLeft={2}>
          {data.title}
        </Text>
        <Text
          fontSize="10"
          color="black"
          alignItems="center"
          p={1}
          marginTop={0}
          marginLeft={2}>
          Artificial Intelligence is reshaping our world, dramatically altering
          numerous sectors and influencing.
        </Text>
      </VStack>

      <HStack space={2} marginBottom={1} marginTop={2} marginLeft="310">
        <ArrowRight />
      </HStack>
    </Box>
  );
}
