import {Animated, FlatList, StyleSheet, Text, View} from 'react-native';
import slides from './slides';
import OnboardingItem from './OnboardingItem';
import {useRef, useState} from 'react';
import Paginator from './Paginator';

const Onboarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewableItemChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  return (
    <View style={styles.container}>
      <FlatList
        data={slides}
        renderItem={({item}) => <OnboardingItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        keyExtractor={item => item.id}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        onViewableItemsChanged={viewableItemChanged}
        scrollEventThrottle={32}
        ref={slidesRef}
      />
      <Paginator data={slides} scrollX={scrollX} />
    </View>
  );
};
export default Onboarding;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
