import {AspectRatio, Box, Button, Center, Image, Text, View} from 'native-base';
import React from 'react';
import {GlobalSearch} from '@/modules/GlobalSearch';
import {TouchableWithoutFeedback} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const Home = () => {
  const navigation = useNavigation();

  const handlePress = (screen: string) => {
    navigation.navigate(screen);
  };
  return (
    <TouchableWithoutFeedback onPress={() => handlePress('SwipeCards')}>
      <Box mt="5">
        <GlobalSearch />
        <Center mt="5">
          <Box
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
          </Box>
        </Center>
      </Box>
    </TouchableWithoutFeedback>
  );
};
