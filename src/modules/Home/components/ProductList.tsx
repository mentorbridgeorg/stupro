import React from 'react';
import { ScrollView, VStack, Center } from 'native-base';
import {  ProductCard } from './ProductCard';
import { ProductData } from './ProductCard.types';



const productData: ProductData[] = [
  {
    date: 'Jan',
    day: '21',
    title: 'AI projects ',
    imageUrl: 'https://wallpaperaccess.com/full/317501.jpg',
    
  },
  
];


export const ProductList = () => {
  return (
    <ScrollView>
      <Center flex={1} bg="white">
        <VStack space={4} width="90%" alignItems="center">
          {productData.map((data, index) => (
            <ProductCard key={`${data.date}-${data.day}-${index}`} data={data} />
          ))}
        </VStack>
      </Center>
    </ScrollView>
  );
};
