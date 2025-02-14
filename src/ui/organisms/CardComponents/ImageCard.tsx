import React from 'react';
import styles from '@/ui/styles';
import { Image } from 'react-native';

const ImageCard = (props:{cover: string}) => {


  return (
<Image source={ typeof props.cover === 'string' ?
                 { uri: props.cover } : props.cover}
                style={styles.fullCardsImage}
                />
  );
};

export default ImageCard;
