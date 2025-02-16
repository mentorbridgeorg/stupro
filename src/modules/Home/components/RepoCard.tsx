import {
  Badge,
  Box,
  Center,
  HStack,
  IconButton,
  ScrollView,
  Text,
  VStack,
} from 'native-base';
import React from 'react';
import {ImageBackground} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {RepoData} from './RepoCard.types';

interface RepoCardProps {
  data: RepoData[];
}

export const RepoCard = ({data}: RepoCardProps) => {
  const addToFavorites = () => {
    console.log('addToFavorites');
  };

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <HStack space={4} p={3} overflow="auto">
        {data.map((item, index) => (
          <Box
            key={index}
            w="200px"
            h="220px"
            rounded="lg"
            borderLeftRadius={20}
            borderRightRadius={20}
            shadow={2}
            bg="white">
            <ImageBackground
              source={{uri: item.thumbnail}}
              // eslint-disable-next-line react-native/no-inline-styles
              imageStyle={{
                width: '100%',
                height: '100%',
                position: 'relative',
                borderRadius: 20,
              }}>
              <Badge
                colorScheme="coolGray"
                bg="primary.600"
                position="absolute"
                top="2"
                left="2"
                px="2"
                rounded="xl">
                {item.language.toLocaleUpperCase()}
              </Badge>

              <IconButton
                onPress={addToFavorites}
                icon={
                  <Ionicons
                    name={item.isFavorite ? 'heart' : 'heart-outline'}
                    size={18}
                    color="red"
                  />
                }
                padding={3}
                position="absolute"
                top="2"
                rounded="full"
                right="2"
                bg="white"
              />
            </ImageBackground>

            <VStack p="2" space="1">
              <Text fontSize="md" fontWeight="bold">
                Male City
              </Text>
              <HStack alignItems="center" space="1">
                <Ionicons name="location-outline" size={14} color="gray" />
                <Text fontSize="xs" color="gray.500">
                  Maldives
                </Text>
              </HStack>

              <HStack alignItems="center" space="1">
                <Ionicons name="star" size={14} color="gold" />
                <Text fontSize="xs" fontWeight="bold">
                  4.4
                </Text>
                <Text fontSize="xs" color="gray.500">
                  (32)
                </Text>
              </HStack>
            </VStack>
            <Box
              position="absolute"
              bottom="0"
              height="auto"
              shadow={2}
              opacity={1}
              borderBottomLeftRadius={20}
              borderBottomRightRadius={20}
              width="100%"
              bg="#fff"
              padding={2}>
              <Center>
                <Text fontSize="sm" color="font.primary" fontWeight="bold">
                  {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                </Text>
              </Center>
            </Box>
          </Box>
        ))}
      </HStack>
    </ScrollView>
  );
};
