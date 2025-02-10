import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { useLoading } from '../Loader/LoadingContext'; // Import the custom hook

const LoaderComponent = () => {
  const { isLoading } = useLoading(); // Access the loading state

  if (!isLoading) return null; // Don't render the loader if not loading

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 1000, // Ensure it overlays other components
  },
});

export default LoaderComponent;