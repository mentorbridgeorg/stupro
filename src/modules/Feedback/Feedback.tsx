import {BadFaceEmojiIcon} from '@assets/icons/BadFaceEmojiIcon';
import {GoodFaceIcon} from '@assets/icons/GoodFaceIcon';
import {OkFaceIcon} from '@assets/icons/OkFaceIcon';
import {PerfectFaceIcon} from '@assets/icons/PerfectFaceIcon';
import {Button} from '@atoms/Button';
import {Box, Flex, HStack, Link, Text, TextArea} from 'native-base';
import React, {useEffect, useState} from 'react';
import {EmojiButton} from './components/EmojiButton';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import {Toast} from '@/ui/atoms/Toast';
import {PAGES_ENDPOINT, sendData} from '@/api';

export const Feedback = () => {
  const [selectedEmoji, setSelectedEmoji] = useState<number | null>(null);
  const [comment, setComment] = useState('');
  const [isSendPressed, setSendPressed] = useState(false);
  const navigation = useNavigation();
  const toast = useToast();
  const emojis = [
    {
      label: 'Bad',
      icon: <BadFaceEmojiIcon />,
      color: '#E946B5',
      bg: 'rgba(252,237,246,1)',
    },
    {
      label: 'Ok',
      icon: <OkFaceIcon />,
      color: '#3F3CF5',
      bg: 'rgba(218,218,254,1)',
    },
    {
      label: 'Good',
      icon: <GoodFaceIcon />,
      color: '#12CE41',
      bg: 'rgba(231, 250, 235, 1)',
    },
    {
      label: 'perfect',
      icon: <PerfectFaceIcon />,
      color: '#F3C331',
      bg: 'rgba(254, 249, 224,1)',
    },
  ];
  const saveFeedback = () => {
    const data = {
      label: selectedEmoji !== null ? emojis[selectedEmoji].label : null,
      comment: setComment,
      addedDate: null,
      addedBy: null,
    };
    sendData(PAGES_ENDPOINT + '/feedback', {data}).then((response) => {
      if (response) {
        toast.show({
          render: () => {
            return (
              <Toast
                type="sucess"
                title={'Success'}
                description={'Feedback sent Successfully!'}
              />
            );
          },
        });
      }
    });
  };
  return (
    <Box>
      <HStack p={4} space={3}>
        {emojis.map((emoji, index) => (
          <EmojiButton
            key={index}
            icon={emoji.icon}
            label={emoji.label}
            value={selectedEmoji}
            onPress={() => setSelectedEmoji(index)}
            color={emoji.color}
            bgColor={emoji.bg}
          />
        ))}
      </HStack>
      <Text fontSize="14" color="muted.600" ml="2">
        Comment(Optional)
      </Text>
      <TextArea
        placeholder="Tell us more..."
        value={comment}
        placeholderTextColor="muted.400"
        onChangeText={setComment}
        backgroundColor="#FEFEFE"
        borderWidth={'2'}
        borderColor="#FFE37F"
        borderRadius="10"
        mt="2"
        ml="1"
        color="black"
        tvParallaxProperties={undefined}
        onTextInput={undefined}
        autoCompleteType={undefined}
      />
      <Box mt="10">
        <HStack space={5} justifyContent={'space-between'}>
          <Link mt={'2'} ml={'2'} onPress={() => {}}>
            <Text color="#0089B3" fontSize="13" fontWeight={'bold'}>
              Ask Me Later
            </Text>
          </Link>
          <Box width={'150'} flex={1}>
            <Flex direction="row-reverse">
              <Button
                onPress={() => {
                  setSendPressed(true);
                  saveFeedback();
                  navigation.navigate('HomePage');
                }}
                isDisabled={selectedEmoji === null}>
                Send
              </Button>
            </Flex>
          </Box>
        </HStack>
      </Box>
    </Box>
  );
};
