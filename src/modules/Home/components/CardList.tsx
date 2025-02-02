import {Center, ScrollView, VStack} from 'native-base';
import React from 'react';
import {ArticleCard} from './ArticleCard';
import {CardData} from './ArticleCard.types';

const cardData: CardData[] = [
  {
    title: 'AI projects are great',
    imageUrl: 'https://wallpaperaccess.com/full/317501.jpg',
    timeAgo: '2 Hours Ago',
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
