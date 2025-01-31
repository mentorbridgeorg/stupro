import {HStack, VStack} from 'native-base';
import React, {useState} from 'react';
import {CategoriesCard, CatgoriesTopic} from './Components';

export const CategoryForm = () => {
  const [visibleCards, setVisibleCards] = useState<string[]>(['Article']); //default

  const topics = [{label: 'Article'}, {label: 'Product'}, {label: 'Repo'}];

  const handleTopicPress = (label: string) => {
    if (!visibleCards.includes(label)) {
      setVisibleCards(prevCards => [...prevCards, label]);
    }
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

      <VStack space={4} mt={5}>
        {visibleCards.map((card, index) => (
          <CategoriesCard key={index} topic={card} />
        ))}
      </VStack>
    </>
  );
};
