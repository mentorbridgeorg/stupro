import React, { useState, useEffect, useRef } from "react";
import { Animated, Image } from "react-native";
import { Button, Center, NativeBaseProvider, Text, VStack, View } from "native-base";
import LinearGradient from "react-native-linear-gradient"; 
import { styles } from "./PuzzleCardStyles";


export const PuzzleCard = ({ index = 0 }) => {
  const colors = [
    ["#D0B7F9", "#9658EE"],
    ["#F162A7", "#D73372"], 
    ["#ADDBF9", "#56CCF2"],
    ["#FC9090", "#FF5E62"], 
    ["#A9F0EB", "#16A085"], ];

  const question = "Which planet is known as the Red Planet?";  //ques
  const options = ["Mercury", "Venus", "Earth", "Mars"];  //option
  const correctAnswer = "Mars";  //answer
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const shakeAnimation = useRef(new Animated.Value(0)).current;
  const scaleAnimation = useRef(new Animated.Value(1)).current;
  const borderColor = isCorrect === true ? "#5CE65C" : isCorrect === false ? "#EE625A" : "transparent";

  useEffect(() => { //anim for wrong ans
    if (selectedOption && selectedOption !== correctAnswer) {
      Animated.sequence([
        Animated.timing(shakeAnimation, { toValue: 10, duration: 100, useNativeDriver: true }),
        Animated.timing(shakeAnimation, { toValue: -10, duration: 100, useNativeDriver: true }),
        Animated.timing(shakeAnimation, { toValue: 10, duration: 100, useNativeDriver: true }),
        Animated.timing(shakeAnimation, { toValue: 0, duration: 100, useNativeDriver: true }),
      ]).start();
    }
  }, [selectedOption]);

  useEffect(() => {//anim for crt ans
    if (isCorrect) {
      Animated.sequence([
        Animated.timing(scaleAnimation, { toValue: 1.1, duration: 150, useNativeDriver: true }),
        Animated.timing(scaleAnimation, { toValue: 1, duration: 150, useNativeDriver: true }),
      ]).start();
    }
  }, [isCorrect]);

  const handleAnswer = (selected: string) => {
    setSelectedOption(selected);
    setIsCorrect(selected === correctAnswer);
     setTimeout(() => {
      setIsCorrect(null);
      setSelectedOption(null);
    }, 3000);
  };

  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Animated.View
          style={[
            styles.cardContainer,
            {
              transform: [
                { translateX: shakeAnimation },
                { scale: scaleAnimation }, ],
              borderColor,
              minHeight: 220,
            },]}>
          <LinearGradient
            colors={colors[index % colors.length]}
            style={[styles.top, { borderRadius: 10, }]} >
            <Text style={styles.question}>{question}</Text>
            <Image source={require("@/assets/qimg.jpg")} style={styles.questionImage} />
          </LinearGradient>

          <VStack space={1} style={styles.optionsGrid}>
            {[0, 2].map((rowIndex) => (
              <View key={rowIndex} style={styles.row}>
                {options.slice(rowIndex, rowIndex + 2).map((option, i) => (
                  <Button
                    key={i}
                    style={[
                      styles.optionCard,
                      { borderColor: colors[index % colors.length][1] },
                      selectedOption === option && isCorrect ? styles.correctOption : {},
                      selectedOption === option && isCorrect === false ? styles.incorrectOption : {},
                    ]}
                    onPress={() => handleAnswer(option)}>
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