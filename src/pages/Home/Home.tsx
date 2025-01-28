import { Box, Button, Center, Text, View, Image} from 'native-base';
import React from 'react';
// import {GlobalSearch} from '@modules/GlobalSearch';
import Swiper from 'react-native-deck-swiper';
import styles from '@/ui/styles';
import cardsData from '@/assets/cards/CardsData';
import YouTubeVideo from '@/ui/organisms/CardComponents/YouTubeVideo';
import ImageComponent from '@/ui/organisms/CardComponents/ImageComponent';
import TitleComponent from '@/ui/organisms/CardComponents/TitleComponent';
import DescriptionComponent from '@/ui/organisms/CardComponents/DescriptionComponent';
import ImageCard from '@/ui/organisms/CardComponents/ImageCard';
import CoverTitleComponent from '@/ui/organisms/CardComponents/CoverTitleComponent';
import { ImageBackground } from 'react-native';


export const Home = () => {
  return (
    <ImageBackground source={require('../../assets/images/bgIlluistraion3.jpeg')} style={{flex: 1 }} imageStyle={styles.cardBackground}>
      <Box backgroundColor={'rgba(255, 182, 28)'} >
      {/* <GlobalSearch /> */}
      <Center >
        <Swiper
          cards={cardsData}
          // cards={['DO', 'MORE', 'OF', 'WHAT', 'MAKES', 'YOU', 'HAPPY']}
          renderCard={(card) => {
            return (
              // <ImageBackground source={require('../../assets/images/image1.jpg')} style={styles.background} borderRadius={20}>
              <View style={styles.card}>
                {card.videoId && <YouTubeVideo videoId= {card.videoId} />}
                {card.image && <ImageComponent image={card.image}/>}
                {card.title && !card.cover && <TitleComponent title={card.title}/>}
                {card.description && <DescriptionComponent description={card.description}/>}
                {card.cover && <ImageCard cover={card.cover}/>}
                {card.title && card.cover && <CoverTitleComponent coverTitle={card.title}/>}
              </View>
              // </ImageBackground>
            );
          }}
          onSwipedLeft={cardIndex => {
            console.log(cardIndex);
          }}
          horizontalSwipe={true}
          verticalSwipe={false}
          showSecondCard={true}
          onSwipedAll={() => {
            console.log('onSwipedAll');
          }}
          goBackToPreviousCardOnSwipeRight={true}
          cardIndex={0}
          backgroundColor={'#4FD0E9'}
          stackSize={3}>
          {/* <Button
            onPress={() => {
              console.log('oulala');
            }}
            >
            <Text color="black">You can press me</Text>
          </Button> */}
        </Swiper>
      </Center>
    </Box>
    </ImageBackground>

  );
};


