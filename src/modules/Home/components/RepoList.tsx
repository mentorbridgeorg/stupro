import React from 'react';
import { ScrollView, VStack, Center } from 'native-base';
import {  RepoCard } from '../components/RepoCard';
import { RepoData } from './RepoCard.types';



const repoData: RepoData[] = [
  {
   
    title: 'AI projects ',
    imageUrl: 'https://wallpaperaccess.com/full/317501.jpg',
    
  },
  
];


export const RepoList = () => {
  return (
    <ScrollView>
      <Center flex={1} bg="white">
        <VStack space={4} width="90%" alignItems="center">
          {repoData.map((data, index) => (
            <RepoCard key={`${index}`} data={data} />
          ))}
        </VStack>
      </Center>
    </ScrollView>
  );
};
