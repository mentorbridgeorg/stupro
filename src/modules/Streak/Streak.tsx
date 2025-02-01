import React, {useEffect, useState} from 'react';
import {Box, HStack, Text, Card, Image} from 'native-base';
import axios from 'axios';
import {StatusCircle} from '../../ui/atoms/StatusCircle/StatusCircle';
import { fetchData, PAGES_ENDPOINT } from '@/api';

export const Streak = () => {
  const [streaks, setStreakDetails] = useState<any[]>([]);

  const showStreak = () => {
   fetchData(PAGES_ENDPOINT+'/streak')
      .then(response => {
        setStreakDetails('Response:', response);
      })
      
        setStreakDetails([
          {
            id: 'Login',
            details: [
              {day: 'Mon', status: true},
              {day: 'Tue', status: true},
              {day: 'Wed', status: true},
              {day: 'Thu', status: true},
              {day: 'Fri', status: false},
              {day: 'Sat', status: false},
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
     
  };

  useEffect(() => {
    showStreak();
  }, []);

  return (
    <Box p={4}>
      <HStack
        alignItems="center"
        justifyContent="center"
        space={2}
        mt={5}
        mb={3}
        mr={8}>
        

        <Image
         
          source={{
            uri: 'https://png.pngtree.com/png-vector/20240727/ourmid/pngtree-number-7-with-fire-growing-out-png-image_13246805.png',
          }}
          alt="Streak Icon"
          size="12"
        />
        <Text color="font primary" fontSize="2xl" bold>
          DAYS
        </Text>
        <Text color="font primary" fontSize="2xl" bold>
          STREAK
        </Text>
      </HStack>

      <Box mt={10}>
        {streaks.map(streak => (
          <Card
            key={streak.id}
            bg={'#F3C331'}
            rounded="md"
            shadow={3}
            p={5}
            alignItems="center"
            width="90%"
            alignSelf="center"
            mb={10}
            pt={7}
            >
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
