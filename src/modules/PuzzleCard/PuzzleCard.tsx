import React, { useState, useEffect, useRef } from "react";
import { Animated, Image } from "react-native";
import { Button, Center, NativeBaseProvider, Text, VStack, View } from "native-base";
import LinearGradient from "react-native-linear-gradient";
import { styles } from "./PuzzleCardStyles";
import { color } from "native-base/lib/typescript/theme/styled-system";


export const PuzzleCard = ({ index = 0 }) => {
  const colors = [
    ["#D0B7F9", "#9658EE"],
    ["#F162A7", "#D73372"],
    ["#ADDBF9", "#56CCF2"],
    ["#FC9090", "#FF5E62"],
    ["#A9F0EB", "#16A085"],
  ];

  const question = "Which planet is known as the Red Planet?";
  const options = ["Mercury", "Venus", "Earth", "Mars"];
  const correctAnswer = "Mars";
  const description="Mars appears red due to iron oxide (rust) on its surface. It has a thin atmosphere and extreme temperatures."
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [flipped, setFlipped] = useState(false);
  const shakeAnimation = useRef(new Animated.Value(0)).current;
  const scaleAnimation = useRef(new Animated.Value(1)).current;
  const flipAnimation = useRef(new Animated.Value(0)).current;
  const frontInterpolate = flipAnimation.interpolate({
    inputRange: [0, 180],
    outputRange: ["0deg", "180deg"],
  });
  const backInterpolate = flipAnimation.interpolate({
    inputRange: [0, 180],
    outputRange: ["180deg", "360deg"],
  });

  const triggerFlip = () => {
    Animated.timing(flipAnimation, {
      toValue: 180,
      duration: 600,
      useNativeDriver: true,
    }).start(() => setFlipped(true)); 
  };
  useEffect(() => {
   
    if (selectedOption && selectedOption !== correctAnswer) {
      Animated.sequence([
        Animated.timing(shakeAnimation, { toValue: 10, duration: 100, useNativeDriver: true }),
        Animated.timing(shakeAnimation, { toValue: -10, duration: 100, useNativeDriver: true }),
        Animated.timing(shakeAnimation, { toValue: 10, duration: 100, useNativeDriver: true }),
        Animated.timing(shakeAnimation, { toValue: 0, duration: 100, useNativeDriver: true }),
      ]).start();
    }
  }, [selectedOption]);

  useEffect(() => {
  
    if (isCorrect) {
      Animated.sequence([
        Animated.timing(scaleAnimation, { toValue: 1.1, duration: 150, useNativeDriver: true }),
        Animated.timing(scaleAnimation, { toValue: 1, duration: 150, useNativeDriver: true }),
      ]).start();
        setTimeout(() => {
        triggerFlip();
      }, 700);
    }
  }, [isCorrect]);

  const handleAnswer = (selected: string) => {
    setSelectedOption(selected);
    setIsCorrect(selected === correctAnswer);
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
                { scale: scaleAnimation },
                { rotateY: flipped ? backInterpolate : frontInterpolate }, 
              ],
              borderColor: isCorrect === true ? "#5CE65C" : isCorrect === false ? "#EE625A" : "transparent",
              minHeight: 220,
            },
          ]}
        >
      
          {!flipped ? (
            <>
              <LinearGradient
                colors={colors[index % colors.length]}
                style={[styles.top, { borderRadius: 10 }]}
              >
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
                        onPress={() => handleAnswer(option)}
                      >
                        <Text style={styles.optionText}>{option}</Text>
                      </Button>
                    ))}
                  </View>
                ))}
              </VStack>
            </>
          ) : (
          <View style={styles.optionsGrid}>
            <View style={{ padding: 40, }}>
              <Text style={{ fontSize: 16, fontWeight: "bold", color: "black" ,}}>
               {question}
              </Text>
              <Text style={{ fontSize: 14, color: "black", marginTop: 20 }}>
               {description}
              </Text>
            </View>
            </View>
          )}
        </Animated.View>
      </Center>
    </NativeBaseProvider>
  );
};

export default PuzzleCard;
