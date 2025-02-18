import {Box, Center, View} from 'native-base';
import React, {useEffect} from 'react';
import Swiper from 'react-native-deck-swiper';
import styles from '@/ui/styles';
import ImageComponent from '@/ui/organisms/CardComponents/ImageComponent';
import TitleComponent from '@/ui/organisms/CardComponents/TitleComponent';
import DescriptionComponent from '@/ui/organisms/CardComponents/DescriptionComponent';
import ImageCard from '@/ui/organisms/CardComponents/ImageCard';
import CoverTitleComponent from '@/ui/organisms/CardComponents/CoverTitleComponent';
import {ImageBackground} from 'react-native';
import {FeedbackPage} from '../Feedback';
import DeepLink from '../DeepLink/DeepLink';

export const SwipeCards = ({route}) => {
  const [showFeedback, setShowFeedback] = React.useState(false);
  const {cardData} = route.params;
  console.log('DATA From Props',cardData);
  const checkCards = () => {
  if (cardData.length > 1) {
    return cardData;
  }else{
    return [cardData];
  }
};
const revisedCard = checkCards();

  useEffect(() => {
    console.log(showFeedback);
  }, [showFeedback]);
  return (
    <ImageBackground
      source={require('../../assets/images/bgIlluistraion3.jpeg')}
      style={styles.cardBackground}>
      <Box>
        <Center>
          {showFeedback ? (
            <View justifyContent={'center'}>
              <FeedbackPage data={revisedCard}/>
            </View>
          ) : (
            <Swiper
              key={showFeedback ? 'feedback' : 'cards'}
              cards={revisedCard}
              renderCard={card => {
                return (
                  <View style={styles.card}>
                    {card.image && <ImageComponent image={card.image} />}
                    {card.title && !(card as {cover: string}).cover && (
                      <TitleComponent title={card.title} />
                    )}
                    {card.description && (
                      <DescriptionComponent description={card.description} />
                    )}
                    {card.cover && <ImageCard cover={card.cover} />}
                    {card.title && card.cover && (
                      <CoverTitleComponent coverTitle={card.title} />
                    )}
                  </View>
                );
              }}
              onSwipedLeft={cardIndex => {
                console.log(cardIndex);
              }}
              horizontalSwipe={true}
              verticalSwipe={false}
              showSecondCard={true}
              onSwipedAll={() => {
                setShowFeedback(true);
                // <DeepLink data={revisedCard}/>;
                // console.log('revised',revisedCard);
                console.log('onSwipedAll');
              }}
              goBackToPreviousCardOnSwipeRight={true}
              cardIndex={0}
              backgroundColor={'#4FD0E9'}
              stackSize={3} />
          )}
        </Center>
      </Box>
    </ImageBackground>
  );
};
