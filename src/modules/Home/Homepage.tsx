import {Box, Image, VStack} from 'native-base';
import React from 'react';

import {TrendTopic} from './components';
import {CardList} from './components/CardList';
import {ProductList} from './components/ProductList';
import {RepoList} from './components/RepoList';
import {ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const HomePage = () => {
  return (
    <>
      <ScrollView>
        <VStack space={4} alignItems="center">
          <LinearGradient colors={['#FFE37F','#FEF4D2','#FFFFFf']}>
          <Box
            width={500}
            height={250}>
            <Box>
              <Image
                size={70}
                borderRadius={15}
                marginLeft={170}
                width={150}
                height={120}
                marginTop={100}
                source={{
                  uri: 'https://wallpaperaccess.com/full/317501.jpg',
                }}
                alt="Alternate Text"
              />
            </Box>
          </Box>
          </LinearGradient>

          <TrendTopic />

          <CardList />
          <ProductList />
          <RepoList />
          <CardList />
          <RepoList />
          <CardList />
          <RepoList />
          <CardList />
          <RepoList />
        </VStack>
      </ScrollView>
    </>
  );
};
