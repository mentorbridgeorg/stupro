import React from 'react';
import {Box, VStack, HStack, Text, Image} from 'native-base';
import {BookMarkIcon} from '../../../assets/icons/BookMarkIcon';
import { TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SwipeCards } from '@/pages/Home';
// import { useCardData } from '@/pages/Home/useCardData';


// interface ArticleCardProps {
//   data: CardData;
// }

export function Card({data}: ArticleCardProps) {
  // const {cardData} = useCardData();
  const navigation = useNavigation();
// console.log(data);
  return (
    <TouchableWithoutFeedback onPress={() => {
      navigation.navigate('SwipeCards'
      ,{cardData: data});
    }}>
      <Box
        bg="#FDFAEC"
        width="380px"
        height="220px"
        p={2}
        borderRadius="10"
        borderColor="black"
        borderWidth={2}
        shadow={2}>
        <HStack>
          <Image
            size={60}
            borderRadius={15}
            marginBottom={1}
            marginRight={1}
            width={460}
            height={100}
            source={{
              uri: data.image,
            }}
            alt="Card Image"
          />
        </HStack>
        <VStack>
          <Text
            fontSize="md"
            color="black"
            alignItems="center"
            fontWeight="bold"
            marginTop={1}
            marginLeft={2}>
            {data.title}
          </Text>
          <Text
            fontSize="10"
            color="black"
            alignItems="center"
            p={1}
            marginTop={0}
            marginLeft={2}>
              {data.description}
          </Text>
        </VStack>

        <HStack space={2} marginBottom={1} marginTop={2} marginLeft="310">
          <BookMarkIcon />
        </HStack>
      </Box>
      </TouchableWithoutFeedback>
  );
}
