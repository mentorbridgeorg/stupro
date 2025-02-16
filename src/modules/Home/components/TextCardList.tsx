import React from 'react';
import {ScrollView, VStack, Center} from 'native-base';
import {TextCard} from './TextCard';


const textData = [
  {
    text: 'Artificial Intelligence is reshaping our world, dramatically altering numerous sectors and influencing.',
  },
];

export const TextList = () => {
  return (
    <ScrollView>
   
      <Center flex={1} bg="#FDFAEC" width={300} height={70} borderRadius={10} >
        <VStack space={4} width="90%" alignItems="center">
          {textData.map(data => (
            <TextCard key={data.text} data={data.text} />
          ))}
        </VStack>
      </Center>
     
    </ScrollView>
  );
};
