import React from 'react';
import { Text} from 'native-base';


export const TextCard = ({data}: {data:string}) => {
  return (
    <Text
    fontSize="12"
    color="black.100"
    marginRight={10}
    marginTop={1}
    >
    {data}
  </Text>
            
             
           
      
  );
};
