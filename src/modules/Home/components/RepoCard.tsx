import React from 'react';
import { Box, VStack, Text, Image, Badge, ScrollView, HStack } from 'native-base';
import { RepoData } from './RepoCard.types';
import { BookMarkIcon } from '@/assets/icons/BookMarkIcon';

interface RepoCardProps {
  data: RepoData[];  
}

export const RepoCard = ({ data }: RepoCardProps) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <HStack space={4} p={3}>
        {data.map((item, index) => (
          <Box
            key={index}
            borderWidth={1}
            borderColor="black"
            borderRadius={15}
            p={6}
            width={350}
            height={180}
            bg="white"
            flexDirection="row"
            alignItems="center"
            shadow={2}
          >
            <VStack space={2} alignItems="center">
              <Image
                source={{ uri: item.imageUri }}
                borderRadius={15}
                width={60}
                height={60}
                resizeMode="contain"
              />
              <Text fontSize="14" fontWeight="bold" color="black">
                {item.title}
              </Text>
            </VStack>
            <Box
              bg="black"
              borderRadius={10}
              p={3}
              ml={4}
              flex={1}
              height={110}
              justifyContent="space-between"
            >
              <Text fontSize="12" fontWeight="bold" color="white">
                Artificial Intelligence
              </Text>
              <Text fontSize="9" color="gray.300" ml={2}>
                AI is reshaping our world, influencing our daily routines.
              </Text>

              <Badge bg="amber.300" alignSelf="flex-end" borderRadius={10} px={2}>
                <Text fontSize="10" color="black">{item.title}</Text>
              </Badge>
            </Box>
            <Box position="absolute" bottom={3} right={3}>
              <BookMarkIcon />
            </Box>
          </Box>
        ))}
      </HStack>
    </ScrollView>
  );
};
