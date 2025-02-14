import { AspectRatio, Box, Center, VStack,Image} from 'native-base';
import React from 'react';

import { ScrollView} from 'react-native';

import {TrendTopic} from './components';
import {CardList} from './components/CardList';
import {ProductList} from './components/ProductList';
import {RepoList} from './components/RepoList';
import { GlobalSearch } from '../GlobalSearch/GlobalSearch';
import LinearGradient from 'react-native-linear-gradient';

export const HomeModule = () => {
  return (
    <ScrollView>
      
      <VStack space={4} alignItems="center" bg='#FFFFFF' >
      <LinearGradient colors={['#FFE37F','#FEF4D2','#FFFFFF']} >

        <Box mt="5" w={390} h={300}>
        
      <GlobalSearch />
      <Center mt="5"  >
        <Box
          maxW="90%"
          rounded="lg"
          overflow="hidden"
          borderColor="#F3C331"
          borderWidth="3"
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
              height="100%" />
          </AspectRatio>

        </Box>
      </Center>
    </Box>
    </LinearGradient>
   
      

        <TrendTopic />
         
        <RepoList />
       

        <CardList />
        <ProductList />
       <CardList />
       <ProductList />
        <CardList />
        <RepoList />
        <ProductList />
        <CardList />
        <ProductList />
      </VStack>
     
     
    </ScrollView>
  );
};
