import { Box, Button, Center, Text, View, Image, Flex} from 'native-base';
import React, { useEffect } from 'react';
// import {GlobalSearch} from '@modules/GlobalSearch';
import Swiper from 'react-native-deck-swiper';
import styles from '@/ui/styles';
import cardsData from '@/assets/cards/CardsData';
import ImageComponent from '@/ui/organisms/CardComponents/ImageComponent';
import TitleComponent from '@/ui/organisms/CardComponents/TitleComponent';
import DescriptionComponent from '@/ui/organisms/CardComponents/DescriptionComponent';
import ImageCard from '@/ui/organisms/CardComponents/ImageCard';
import CoverTitleComponent from '@/ui/organisms/CardComponents/CoverTitleComponent';
import { ImageBackground } from 'react-native';
import { FeedbackPage } from '../Feedback';
import { useCardData } from './useCardData';

export const SwipeCards = () => {
  const [showFeedback, setShowFeedback] = React.useState(false);
  const {cardData} = useCardData();
  useEffect(() => {
    console.log(showFeedback);
  },[showFeedback]);
  return (
    <ImageBackground source={require('../../assets/images/bgIlluistraion3.jpeg')} style={styles.cardBackground}>
      <Box >

      {/* <GlobalSearch /> */}
      <Center >
        {showFeedback ?
        <View justifyContent={'center'}>
          <FeedbackPage/>
        </View>
        : <Swiper
          key={showFeedback ? 'feedback' : 'cards'}
          cards={cardData.length > 0 ? cardData : []}
          // cards={['DO', 'MORE', 'OF', 'WHAT', 'MAKES', 'YOU', 'HAPPY']}
          renderCard={(card) => {
            return (

              // <ImageBackground source={require('../../assets/images/image1.jpg')} style={styles.background} borderRadius={20}>
              <View style={styles.card}>
                {/* {card.videoId && <YouTubeVideo videoId= {card.videoId} />} */}
                {card?.image && <ImageComponent image={card.image}/>}
                {card?.title && !card.cover && <TitleComponent title={card.title}/>}
                {card?.description && <DescriptionComponent description={card.description}/>}
                {card?.cover && <ImageCard cover={card.cover}/>}
                {card?.title && card.cover && <CoverTitleComponent coverTitle={card.title}/>}
              </View>
              // </ImageBackground>
            );
          }}
          onSwipedLeft={cardIndex => {
            if (cardIndex === cardsData.length - 1) {
              setShowFeedback(true);
            }
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
}
      </Center>
    </Box>
    </ImageBackground>
  );
};


