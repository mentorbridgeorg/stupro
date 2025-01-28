import { VStack, HStack } from 'native-base';
import React, { useState } from 'react';
import { CategoriesCard, CatgoriesTopic } from './Components';

import { fetchData } from '@/api';


export const CategoryForm = () => {
  const [visibleCards, setVisibleCards] = useState<string[]>(['Article']);  //default
  const [ setData] = useState<any>(null);
  const topics = [
    { label: 'Article' },
    { label: 'Product' },
    { label: 'Repo' },
  ];
  const handleTopicPress = (label: string) => {
    setVisibleCards([label]);

    // Fetch data 
    fetchData(`URL${label}`)
      .then((response) => {
        setData((prevData: any) => ({
          ...prevData,
          [label]: response,
        }));
      });
  };
 

  return (
    <>
     
      <HStack>
        {topics.map((topic, index) => (
          <CatgoriesTopic
            key={index}
            label={topic.label}
            onPress={() => handleTopicPress(topic.label)}
          />
        ))}
      </HStack>

    
      <VStack space ={4} mt ={5}>
        {visibleCards.map((card, index) => (
          <CategoriesCard key={index} topic={card} />
        ))}
      </VStack>
    </>
  );
};

