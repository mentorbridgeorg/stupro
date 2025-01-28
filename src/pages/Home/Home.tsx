import { Box, Button, Center, Text, View, Image} from 'native-base';
import React from 'react';
import {GlobalSearch} from '@modules/GlobalSearch';
import Swiper from 'react-native-deck-swiper';
import styles from '@/ui/styles';
import cardsData from '@/assets/cards/CardsData';


export const Home = () => {
  return (
    <Box mt="5">
      <GlobalSearch />
      <Center mt="5">
        <Swiper
          cards={cardsData}
          // cards={['DO', 'MORE', 'OF', 'WHAT', 'MAKES', 'YOU', 'HAPPY']}
          renderCard={(card) => {
            return (
              <View style={styles.card}>
                <Image source={ typeof card.image === 'string'?
                 { uri: card.image } : card.image}
                style={styles.cardsImage}
                 alt="image base"/>
                <Text style={styles.cardTitle}>{card.title}</Text>
                <Text style={styles.cardsDescription}>{card.description} </Text>
              </View>
            );
          }}
          onSwipedRight={cardIndex => {
            console.log(cardIndex);
          }}
          horizontalSwipe={true}
          showSecondCard={false}
          onSwipedAll={() => {
            console.log('onSwipedAll');
          }}
          goBackToPreviousCardOnSwipeLeft={true}
          cardIndex={0}
          backgroundColor={'#4FD0E9'}
          stackSize={3}>
          <Button
            onPress={() => {
              console.log('oulala');
            }}
            >
            <Text color="black">You can press me</Text>
          </Button>
        </Swiper>
      </Center>
    </Box>
  );
};


