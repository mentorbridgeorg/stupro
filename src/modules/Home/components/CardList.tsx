import React from 'react';
import { ScrollView, VStack, Center } from 'native-base';
import { Card } from './ArticleCard';
// import { CardData } from './ArticleCard.types';
import { useCardData } from '@/pages/Home/useCardData';
import {ArticleCard} from './ArticleCard';
import {CardData} from './ArticleCard.types';

//un comment this if you want to use the mock api for the article
// export const CardList = () => {
//   const {cardData} = useCardData();
  // console.log(cardData);

const cardData: CardData[] = [
  {

    title: 'AI projects are great',
    imageUri: 'https://img.freepik.com/free-photo/confident-young-entrepreneur-sitting-table-with-laptop-pc-isolated-white_231208-11121.jpg',
    timeAgo: '2 Hours Ago',
  }, 
];


export const CardList = () => {
  return (
    <ScrollView>
      <Center flex={1} bg="white"
      >
        <VStack space={4} width="90%" alignItems="center">
          {cardData.map((data, index) => (
            <Card key={`${index}`} data={data} />
          ))}
        </VStack>
      </Center>
    </ScrollView>
  );
};
