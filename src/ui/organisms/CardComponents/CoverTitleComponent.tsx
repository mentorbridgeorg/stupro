import React from 'react';
import styles from '@/ui/styles';
import { Text } from 'react-native';

const CoverTitleComponent = (props:{coverTitle: string}) => {


  return (
<Text style={styles.coverTitle}>{props.coverTitle}</Text>
  );
};


export default CoverTitleComponent;
