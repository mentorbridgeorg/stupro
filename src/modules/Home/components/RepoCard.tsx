import {ArrowRight} from '@/assets/icons/ArrowRight';
import {Box, HStack, Image, Text, VStack} from 'native-base';
import React from 'react';
import {RepoData} from './RepoCard.types';
interface RepoCardProps {
  data: RepoData;
}

export const RepoCard = ({data}: RepoCardProps) => {
  return (
    <Box
      bg="yellow.100"
      width="380px"
      height="200px"
      p={4}
      borderRadius={10}
      borderBottomWidth={2}
      borderColor="black"
      borderWidth={2}
      shadow={50}>
      <HStack>
        <VStack>
          <HStack>
            <VStack>
              <Image
                borderRadius={15}
                marginLeft={2}
                width={60}
                height={60}
                marginTop={8}
                source={{
                  uri: data.imageUrl,
                }}
                alt="Card Image"
              />
              <Text marginLeft={2} p={1}>
                Python
              </Text>
            </VStack>
            <Box
              bg="white"
              borderRadius="md"
              shadow={2}
              p={4}
              marginLeft={6}
              marginTop={1}
              width="70%"
              height="100%"
              alignItems="center">
              <VStack>
                <Text
                  fontSize="12"
                  color="black"
                  alignItems="center"
                  fontWeight="bold"
                  marginRight={150}>
                  {data.title}
                </Text>
                <Text fontSize="10" color="black" marginRight={1}>
                  Artificial Intelligence is reshaping our world, dramatically
                  altering numerous sectors and influencing.
                </Text>
                <Box
                  bg="#FDFAEC"
                  width="20"
                  height="1"
                  p={2}
                  borderRadius={10}
                  borderBottomWidth={2}
                  borderColor="yellow.100"
                  borderWidth={2}
                  marginTop={2}
                  shadow={50}
                />
              </VStack>
            </Box>
          </HStack>
          <VStack p={3} width={350} borderRadius={40} />
          <HStack marginLeft={300}>
            <ArrowRight />
          </HStack>
        </VStack>
      </HStack>
    </Box>
  );
};
