import React, {useState} from 'react';
import {
  Center,
  NativeBaseProvider,
  Text,
  VStack,
  View,
  HStack,
  Pressable,
} from 'native-base';
import Swiper from 'react-native-swiper';
import {Image} from 'react-native';
import styles from './QuizCard.styles';

interface Question {
  question: string;
  options: string[];
  answer: string;
}

const questions: Question[] = [
  {
    question: 'Lets Start',
    options: [],
    answer: '',
  },
  {
    question: 'What is the capital of Japan?',
    options: ['Beijing', 'Tokyo', 'Italy', 'Germany'],
    answer: 'Tokyo',
  },
  {
    question: 'What is the capital of France?',
    options: ['Berlin', 'Madrid', 'Paris', 'Lisbon'],
    answer: 'Paris',
  },
  {
    question: 'What is the capital of India?',
    options: ['Mumbai', 'Delhi', 'Chennai', 'Kolkata'],
    answer: 'Delhi',
  },
  {
    question: 'What is the capital of Canada?',
    options: ['Ottawa', 'Toronto', 'Vancouver', 'Montreal'],
    answer: 'Ottawa',
  },
  {
    question: 'Check the Answers',
    options: [],
    answer: '',
  },
  {
    question: 'You have successfully completed!',
    options: [],
    answer: '',
  },
];

const optionLabels = ['A', 'B', 'C', 'D'];

const QuizCard = () => {
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: number]: string | null;
  }>({});

  const handleAnswer = (questionIndex: number, selected: string) => {
    if (!selectedOptions[questionIndex]) {
      setSelectedOptions(prev => ({...prev, [questionIndex]: selected}));
    }
  };

  return (
    <NativeBaseProvider>
      <Center flex={1} backgroundColor="#F5F6FA">
        <Swiper loop={false} showsPagination={true} activeDotColor="blue">
          {questions.map((q, questionIndex) => (
            <View
              key={questionIndex}
              style={[
                styles.cardContainer,
                questionIndex === 0 && styles.welcomeCard,
              ]}>
              {questionIndex === 0 && (
                <Image
                  source={{
                    uri: 'https://thumbs.dreamstime.com/b/d-render-wooden-block-word-text-s-quiz-time-alarm-clock-338059490.jpg',
                  }}
                  style={styles.imageStyle}
                />
              )}

              {q.question === 'Check the Answers' ? (
                <VStack space={6} style={styles.answersContainer}>
                  <Text style={[styles.questionText, styles.answerBox]}>
                    Check the Answers
                  </Text>
                  <Text style={styles.optionText}>1. Tokyo</Text>
                  <Text style={styles.optionText}>2. Paris</Text>
                  <Text style={styles.optionText}>3. Delhi</Text>
                  <Text style={styles.optionText}>4. Ottawa</Text>
                  <Text style={styles.optionText}>5. Berlin</Text>
                </VStack>
              ) : q.options.length > 0 ? (
                <>
                  <Text style={styles.questionText}>{q.question}</Text>
                  <VStack space={3} style={styles.optionsContainer}>
                    {q.options.map((option, i) => {
                      const isSelected =
                        selectedOptions[questionIndex] === option;
                      return (
                        <Pressable
                          key={i}
                          style={[
                            styles.optionButton,
                            isSelected
                              ? styles.selectedOption
                              : styles.defaultOption,
                          ]}
                          onPress={() => handleAnswer(questionIndex, option)}
                          disabled={!!selectedOptions[questionIndex]} 
                        >
                          <HStack alignItems="center" space={3}>
                            <View style={styles.optionLabel}>
                              <Text style={styles.optionText}>
                                {optionLabels[i]}
                              </Text>
                            </View>
                            <Text style={styles.optionText}>{option}</Text>
                          </HStack>
                        </Pressable>
                      );
                    })}
                  </VStack>
                </>
              ) : (
                <Text style={styles.questionText}>{q.question}</Text>
              )}

              {questionIndex === questions.length - 1 && (
                <Image
                  source={{
                    uri: 'https://img.freepik.com/premium-vector/five-stars-rating-happy-jumping-people-are-holding-review-stars-their-heads-customer-review-rating-client-feedback-satisfaction-level_458444-373.jpg',
                  }}
                  style={styles.imageStyle}
                />
              )}
            </View>
          ))}
        </Swiper>
      </Center>
    </NativeBaseProvider>
  );
};

export default QuizCard;
