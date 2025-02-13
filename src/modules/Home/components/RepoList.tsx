import React from 'react';
import { ScrollView, VStack, Center } from 'native-base';
import { RepoCard } from '../components/RepoCard';
import { RepoData } from './RepoCard.types';

const repoData: RepoData[] = [
  {
    title: 'AI projects',
    imageUri: 'https://viso.ai/wp-content/uploads/2024/02/ASI-ANI-AGI-types-of-AI.jpg',
  },
  {
    title: 'Machine ',
     imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJhjl5ueLgjQcedeJLg7CpPC3Ix7AEJRrimQ&s.jpg',
  },
  {
    title: ' Learning',
    imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXYbF6gZsFYZIXO5JTYG4BfFlQwqXQGGgHmg&s.jpg',
  },
];

export const RepoList = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <Center flex={1} bg="white">
        <VStack space={4} width="90%" alignItems="center">
          <RepoCard data={repoData} />  {/* Pass the entire array */}
        </VStack>
      </Center>
    </ScrollView>
  );
};
