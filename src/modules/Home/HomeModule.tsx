import {VStack} from 'native-base';
import React from 'react';

import {ScrollView} from 'react-native';
import {CardList} from './components/CardList';
import {ProductList} from './components/ProductList';
import {RepoList} from './components/RepoList';

export const HomeModule = () => {
  return (
    <ScrollView>
      <VStack space={4} alignItems="center" paddingBottom={10} px={2}>
        {/* <TrendTopic /> */}

        <RepoList />
        <ProductList />
        <CardList />
      </VStack>
    </ScrollView>
  );
};
