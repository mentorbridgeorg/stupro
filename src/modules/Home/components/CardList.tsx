import React from 'react';
import { ScrollView, VStack, Center } from 'native-base';
import { Card } from './ArticleCard';
// import { CardData } from './ArticleCard.types';
import { useCardData } from '@/pages/Home/useCardData';


// const cardData: CardData[] = [
//   {
//     title: 'AI projects are great',
//     imageUrl: 'https://wallpaperaccess.com/full/317501.jpg',
//     timeAgo: '2 Hours Ago',
//   },
// ];


export const CardList = () => {
  const {cardData} = useCardData();
  // console.log(cardData);
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
