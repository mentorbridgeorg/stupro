import {Center, ScrollView, VStack} from 'native-base';
import React from 'react';
import { ScrollView, VStack, Center } from 'native-base';
import { ArticleCard } from './ArticleCard';
import { useCardData } from '@/pages/Home/useCardData';
import {ArticleCard} from './ArticleCard';
import {CardData} from './ArticleCard.types';

const cardData: CardData[] = [
  {
    id: '6791f6c59f25120c31f51140',
    tags: ['ai', 'javascript', 'opensource', 'programming'],
    title: 'The Tech Stack for Building AI Apps in 2025',
    description:
      '2025 will be the year of AI apps, changing how we build and use technology.  From smarter tools to...',
    fetchedDate: '2025-01-23',
    thumbnail:
      'https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fwjn32ng0kr519k2wgrh7.png',
    url: 'https://dev.to/copilotkit/the-tech-stack-for-building-ai-apps-in-2025-12l9',
    content:
      '2025 will be the year of AI apps, changing how we build and use technology.  From smarter tools to...',
  },
];

export const CardList = () => {
  return (
    <ScrollView>
      <Center flex={1} bg="white">
        <VStack space={4} width="90%" alignItems="center">
          {cardData.map((data, index) => (
            <ArticleCard key={`${index}`} data={data} />
          ))}
        </VStack>
      </Center>
    </ScrollView>
  );
};
