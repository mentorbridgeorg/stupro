import {AspectRatio, Box, Button, Center, Image, Text, View} from 'native-base';
import React from 'react';
import {GlobalSearch} from '@modules/GlobalSearch';
import Swiper from 'react-native-deck-swiper';
import {StyleSheet} from 'react-native';

export const Home = () => {
  return (
    <Box mt="5">
      <GlobalSearch />
      <Center mt="5">
        {/* <Box
          maxW="90%"
          rounded="lg"
          overflow="hidden"
          borderColor="primary.200"
          borderWidth="5"
          _web={{
            shadow: 2,
            borderWidth: 0,
          }}>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image
              maxWidth="100%"
              maxHeight="250px"
              source={{
                uri: 'https://venngage-wordpress.s3.amazonaws.com/uploads/2020/10/Anatomy-of-the-Perfect-Blog-Post.png',
              }}
              alt="blog"
              width="100%"
              height="100%"
            />
          </AspectRatio>
        </Box> */}
        <Swiper
          cards={['DO', 'MORE', 'OF', 'WHAT', 'MAKES', 'YOU', 'HAPPY']}
          renderCard={card => {
            return (
              <View style={styles.card}>
                <Text style={styles.text}>{card}</Text>
              </View>
            );
          }}
          onSwiped={cardIndex => {
            console.log(cardIndex);
          }}
          onSwipedAll={() => {
            console.log('onSwipedAll');
          }}
          cardIndex={0}
          swipeBack={true}
          // swipeLeft={}
          backgroundColor={'#4FD0E9'}
          stackSize={3}>
          <Button
            onPress={() => {
              console.log('oulala');
            }}
            title="Press me">
            <Text color="black">You can press me</Text>
          </Button>
        </Swiper>
      </Center>
    </Box>
  );
};
