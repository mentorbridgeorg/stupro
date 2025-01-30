import { fetchData } from '@/api';
import { useEffect, useState } from 'react';
import  Data from './Data';
export const useCardData = () => {

    const[cardData, setCardData] = useState<Data[]>([]);
useEffect(() => {
    const fetchCardData = () => {
        fetchData<Data[]>('https://fakestoreapi.com/products')
            .then((data) => setCardData(data))
            .catch(error => console.log(error.message));
    };
    fetchCardData();
}, []);
    return (
        {cardData}
);
};
