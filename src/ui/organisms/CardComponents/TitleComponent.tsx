import React from 'react';
import styles from '@/ui/styles';
import { Text } from 'react-native';

const TitleComponent = (props:{title: string}) => {


  return (
<Text style={styles.cardTitle}>{props.title}</Text>
  );
};


export default TitleComponent;
