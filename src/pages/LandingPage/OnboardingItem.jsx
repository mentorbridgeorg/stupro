import {Button} from '@atoms/Button';
import {useNavigation} from '@react-navigation/native';
import {Image, StyleSheet, useWindowDimensions, View} from 'react-native';
import React from 'react';

const OnboardingItem = ({item}) => {
  const navigation = useNavigation();
  const {width} = useWindowDimensions();

  return (
    <View style={[styles.container, {width}]}>
      <Image
        source={item.image}
        style={[styles.image, {width, resizeMode: 'contain', height: '500'}]}
      />
      {item.id === '5' ? (
        <View style={{position: 'absolute', bottom: 50}}>
          <Button onPress={() => navigation.popTo('SignUp')}>
            Get Started
          </Button>
        </View>
      ) : null}
    </View>
  );
};
export default OnboardingItem;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    justifyContent: 'center',
  },
});
