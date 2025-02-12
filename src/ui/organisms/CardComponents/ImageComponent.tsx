import React from 'react';
import styles from '@/ui/styles';
import { Image } from 'react-native';

const ImageComponent = (props:{image: string}) => {


  return (
<Image source={ typeof props.image === 'string' ?
                 { uri: props.image } : props.image}
                style={styles.cardsImage}
                 alt="image base"/>
  );
};


export default ImageComponent;
