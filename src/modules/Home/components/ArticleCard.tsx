import {Box, HStack, Image, Text, VStack} from 'native-base';
import React from 'react';
import {Box, VStack, HStack, Text, Image} from 'native-base';
import {BookMarkIcon} from '../../../assets/icons/BookMarkIcon';
import { TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SwipeCards } from '@/pages/Home';
import DeepLink from '@/pages/DeepLink/DeepLink';
import {ArrowRight} from '../../../assets/icons/ArrowRight';
import {CardData} from './ArticleCard.types';
import styles from '@/ui/styles';

interface ArticleCardProps {
  data: CardData;
}

export const ArticleCard = ({data}: ArticleCardProps) => {
  return (
    <Box
      bg="#FDFAEC"
      width="380px"
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
          height={200}
          source={{
            uri: data.thumbnail,
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
          fontSize="12"
          color="black"
          alignItems="center"
          p={1}
          style={styles.textContent}
          marginTop={0}
          marginLeft={2}>
          {data.description}
        </Text>
      </VStack>
    </Box>
  );
};
