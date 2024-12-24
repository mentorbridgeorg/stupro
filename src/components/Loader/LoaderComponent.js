import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { useLoading } from '../../context/LoaderStateManagement/LoadingContext'; // Import the custom hook

const LoaderComponent = () => {
  const { isLoading } = useLoading(); // Access the loading state
  console.log('isLoading:', isLoading); // Check the value of isLoading

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
    paddingTop:'5%',
    width: '100%',
    height: '100%',
    zIndex: 1000, // Ensure it overlays other components
  },
});

export default LoaderComponent;
