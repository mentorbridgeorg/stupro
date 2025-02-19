import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Animated, Image } from "react-native";
import { useLoading } from "./LoaderStateManagement";

const LoaderComponent = () => {
  const { isLoading } = useLoading();

  if (!isLoading) return null; // Don't render the loader if not loading

  const scaleValue = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleValue, {
          toValue: 1.5, // Scale up
          duration: 1200,
          useNativeDriver: true,
        }),
        Animated.timing(scaleValue, {
          toValue: 1, // Scale down
          duration: 1200,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [scaleValue]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require("../assets/logo/stupro-logo.png")} 
        style={[styles.image, { transform: [{ scale: scaleValue }] }]}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  image: {
    width: 80,
    height: 80,
  },
});

export default LoaderComponent;
