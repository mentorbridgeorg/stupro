import {Center, ScrollView, VStack} from 'native-base';
import React from 'react';
import {ProductCard} from './ProductCard';
import {ProductData} from './ProductCard.types';

const productData: ProductData[] = [
  {
    date: 'Jan',
    day: '21',
    title: 'AI projects ',
    imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJhjl5ueLgjQcedeJLg7CpPC3Ix7AEJRrimQ&s.jpg',
  },
];

export const ProductList = () => {
  return (
    <ScrollView>
      <Center flex={1} bg="white">
        <VStack space={4} width="90%" alignItems="center">
          {productData.map((data, index) => (
            <ProductCard
              key={`${data.date}-${data.day}-${index}`}
              data={data}
            />
          ))}
        </VStack>
      </Center>
    </ScrollView>
  );
};
