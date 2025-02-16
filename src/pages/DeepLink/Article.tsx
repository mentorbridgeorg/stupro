import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

const ArticleScreen = ({ route }: { route: any }) => {
  const { articleId } = route.params; // Get articleId from deep link

  useEffect(() => {
    // Handle additional logic if needed when the screen is focused
    console.log('Navigated to Article:', articleId);
  }, [articleId]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20 }}>Article ID: {articleId}</Text>
      <Text>This is where the article content will go.</Text>
    </View>
  );
};

export default ArticleScreen;
