import React, {useEffect, useState} from 'react';
import {Box, HStack, Text, Card} from 'native-base';
import axios from 'axios';
import {StatusCircle} from '../../ui/atoms/StatusCircle/StatusCircle';

export const Streak = () => {
  const [streaks, setStreakDetails] = useState<any[]>([]);

  const showStreak = () => {
    axios
      .get('/streak')
      .then(response => {
        setStreakDetails(response.data);
      })
      .catch(error => {
        console.error(error);
        setStreakDetails([
          {
            id: 'Login',
            details: [
              {day: 'Mon', status: true},
              {day: 'Tue', status: true},
              {day: 'Wed', status: true},
              {day: 'Thu', status: true},
              {day: 'Fri', status: false},
              {day: 'Sat', status: true},
              {day: 'Sun', status: true},
            ],
          },
          {
            id: 'Article ',
            details: [
              {day: 'Mon', status: true},
              {day: 'Tue', status: true},
              {day: 'Wed', status: true},
              {day: 'Thu', status: true},
              {day: 'Fri', status: true},
              {day: 'Sat', status: true},
              {day: 'Sun', status: true},
            ],
          },
          {
            id: 'Five cuts ',
            details: [
              {day: 'Mon', status: true},
              {day: 'Tue', status: true},
              {day: 'Wed', status: true},
              {day: 'Thu', status: true},
              {day: 'Fri', status: true},
              {day: 'Sat', status: true},
              {day: 'Sun', status: true},
            ],
          },
        ]);
      });
  };

  useEffect(() => {
    showStreak();
  }, []);

  return (
    <Box p={4}>
      <Text color="font.primary" fontSize="2xl" alignSelf="center" mt={3}>
        STREAK
      </Text>

      <Box mt={7}>
        {streaks.map(streak => (
          <Card
            key={streak.id}
            bg={'#F3C331'}
            rounded="md"
            shadow={3}
            p={4}
            alignItems="center"
            width="90%"
            alignSelf="center"
            mb={6}>
            <HStack space={4} justifyContent="space-around" width="100%">
              {streak.details.map(
                (detail: {day: string; status: boolean}, index: any) => (
                  <Box key={`${streak.id}-${index}`} alignItems="center">
                    <Text color={'black'} fontSize="md" bold mb={2}>
                      {detail.day}
                    </Text>
                    <StatusCircle isChecked={detail.status} />
                  </Box>
                ),
              )}
            </HStack>

            <Text color={'black'} fontSize="lg" bold mt={4}>
              {streak.id}
            </Text>
          </Card>
        ))}
      </Box>
    </Box>
  );
};
