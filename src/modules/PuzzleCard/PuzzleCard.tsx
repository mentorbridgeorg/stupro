import React, { useState, useEffect } from "react";
import { Animated, Easing, Image } from "react-native";
import { Button, Center, NativeBaseProvider, Text, VStack, View } from "native-base";
import { styles } from "./PuzzleCardStyles";

export const PuzzleCard = ({ index = 0 }) => {
  const colors = ["#D0B7F9", "#F162A7", "#ADDBF9", "#FC9090", "#A9F0EB"];
  const question = "What is the most widely used operating system in the world?";
  const options = ["Windows", "macOS", "Linux", "Chrome OS"];
  const correctAnswer = "Windows";
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const shakeAnimation = new Animated.Value(0);
 const borderColor = isCorrect === true ? "#7EFFBC" : isCorrect === false ? "#EE625A" : "transparent";

  
  useEffect(() => {
    if (selectedOption && selectedOption !== correctAnswer) {
      Animated.sequence([
        Animated.timing(shakeAnimation, { toValue: 10, duration: 100, useNativeDriver: true }),
        Animated.timing(shakeAnimation, { toValue: -10, duration: 100,  useNativeDriver: true }),
        Animated.timing(shakeAnimation, { toValue: 10, duration: 100,  useNativeDriver: true }),
        Animated.timing(shakeAnimation, { toValue: 0, duration: 100,  useNativeDriver: true }),
      ]).start();
    }
  }, [selectedOption]);

  const handleAnswer = (selected: string) => {
    setSelectedOption(selected);
    setIsCorrect(selected === correctAnswer);
    setTimeout(() => {
      setIsCorrect(null);
    }, 7000);
setTimeout(() => {
      setSelectedOption(null);
    }, 7000);
  };

  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Animated.View style={[styles.cardContainer, { transform: [{ translateX: shakeAnimation }], borderColor }]}>
          <View style={[styles.top, { backgroundColor: colors[index % colors.length] }]}>
            <Text style={styles.question}>{question}</Text>
            <Image source={require("@/assets/qimg.jpg")} style={styles.questionImage} />
          </View>
          <VStack space={1}  style={styles.optionsGrid}>
            {[0, 2].map((rowIndex) => (
              <View key={rowIndex} style={styles.row}>
                {options.slice(rowIndex, rowIndex + 2).map((option, i) => (
                  <Button
                    key={i}
                    style={[
                      styles.optionCard,
                      { borderColor: colors[index % colors.length] }, 
                      selectedOption === option && isCorrect ? styles.correctOption : {},
                      selectedOption === option && isCorrect === false ? styles.incorrectOption : {},
                    ]}
                    onPress={() => handleAnswer(option)}
                  >
                    <Text style={styles.optionText}>{option}</Text>
                  </Button>
                ))}
              </View>
            ))}
          </VStack>
        </Animated.View>
      </Center>
    </NativeBaseProvider>
  );
};

export default PuzzleCard;
