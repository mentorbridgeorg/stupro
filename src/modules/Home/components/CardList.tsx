import React from 'react';
import {ScrollView, VStack, Center} from 'native-base';
import {Card} from './ArticleCard';
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
            <Card key={`${index}`} data={data} />
          ))}
        </VStack>
      </Center>
    </ScrollView>
  );
};
