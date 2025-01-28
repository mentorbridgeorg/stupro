import React from 'react';
import styles from '@/ui/styles';
import {Text, View} from 'react-native';

const DescriptionComponent = (props: {description: string}) => {
  const description = props.description;

  const paragraphs = description.split('.');

  const cleanedParagraphs = paragraphs
    .map(paragraph => paragraph.trim())
    .filter(paragraph => paragraph.length > 0);

  return (
    <View>
      {cleanedParagraphs.map((paragraph, index) => (
        <Text key={index} style={styles.cardsDescription}>
          {paragraph}{index < cleanedParagraphs.length - 1 ? '.' : ''}
        </Text>
      ))}
    </View>
  );
};

export default DescriptionComponent;
