import { Box } from 'native-base';
import React, { useEffect } from 'react';
import { View, Button, Share } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const DeepLink = ({data}: any) => {
  const generateArticleLink = (articleId : number) => {
    return `yourapp://article/${articleId}`;
  };
  const uniqueId = data[0].id;
  // const data = props;
  console.log('deep',data);
console.log('id:',data[0].id);
  const shareArticle = async (articleId : number) => {
    const url = generateArticleLink(articleId);

    try {
      await Share.share({
        message: `Check out this article: ${url}`,
      });
    } catch (error) {
      console.error('Error sharing the article:', error);
    }
  };
  return (
    <SafeAreaProvider>
    <SafeAreaView>
      <Box>
    <View style={{ justifyContent: 'space-around'}}>
      {/* <Text>Welcome to the Article App!</Text> */}
      <Button
        title="Share"
        onPress={() => shareArticle(uniqueId)}
      />
    </View>
    </Box>
    </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default DeepLink;
