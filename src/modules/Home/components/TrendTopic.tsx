import { Box, HStack, Text, Pressable } from 'native-base';
import React, { useState } from 'react';

export const TrendTopic = () => {
  const topics = ['All', 'Coding', 'Interview', 'Science', 'Database'];
  const [selectedTopic, setSelectedTopic] = useState('All');

  return (
    <Box>
      <HStack space={4} alignItems="center">
        {topics.map((topic, index) => (
          <Pressable key={index} onPress={() => setSelectedTopic(topic)}>
            <Box
              bg={selectedTopic === topic ? '#F3C331' : '#FFE37F'}
              borderRadius="20"
              width="70"
              height="8"
              borderColor={selectedTopic === topic ? '#F3C331' : '#FFE37F'}
              borderWidth={1}
              shadow={2}
              justifyContent="center"
              alignItems="center"
            >
              <Text fontSize="12" color="black">
                {topic}
              </Text>
            </Box>
          </Pressable>
        ))}
      </HStack>
    </Box>
  );
};
