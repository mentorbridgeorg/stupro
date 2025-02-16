import {PAGES_ENDPOINT, sendData} from '@/api';
import {BadFaceEmojiIcon} from '@assets/icons/BadFaceEmojiIcon';
import {GoodFaceIcon} from '@assets/icons/GoodFaceIcon';
import {OkFaceIcon} from '@assets/icons/OkFaceIcon';
import {PerfectFaceIcon} from '@assets/icons/PerfectFaceIcon';
import {Button} from '@atoms/Button';
import {Toast} from '@atoms/Toast';
import {useNavigation} from '@react-navigation/native';
import {Box, Flex, HStack, Text, TextArea, useToast} from 'native-base';
import React, {useState} from 'react';
import {EmojiButton} from './components/EmojiButton';

export const Feedback = () => {
  const [selectedEmoji, setSelectedEmoji] = useState<number | null>(null);
  const [comment, setComment] = useState('');
  const [isSendPressed, setSendPressed] = useState(false);
  const navigation = useNavigation();
  const toast = useToast();
  const emojis = [
    {
      label: 'Bad',
      icon: (color: string) => <BadFaceEmojiIcon color={color} />,
      color: '#E946B5',
      bg: 'rgba(252,237,246,1)',
    },
    {
      label: 'Ok',
      icon: (color: string) => <OkFaceIcon color={color} />,
      color: '#3F3CF5',
      bg: 'rgba(218,218,254,1)',
    },
    {
      label: 'Good',
      icon: (color: string) => <GoodFaceIcon color={color} />,
      color: '#12CE41',
      bg: 'rgba(231, 250, 235, 1)',
    },
    {
      label: 'perfect',
      icon: (color: string) => <PerfectFaceIcon color={color} />,
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
    sendData(PAGES_ENDPOINT + '/feedback', {data}).then(response => {
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
            isSelected={selectedEmoji === index}
            onPress={() => setSelectedEmoji(index)}
            color={emoji.color}
            bgColor={emoji.bg}
          />
        ))}
      </HStack>
      <Text fontSize="14" color="font.primary" ml="2" mt="5" fontWeight="bold">
        Comment (Optional)
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
        <HStack space={5} justifyContent={'center'}>
          {/* <Link mt={'2'} ml={'2'} onPress={() => {}}>
            <Text color="#0089B3" fontSize="13" fontWeight={'bold'}>
              Share this article
            </Text>
          </Link> */}
          <Flex justifyContent={'center'} w="100%">
            <Button
              onPress={() => {
                setSendPressed(true);
                saveFeedback();
                navigation.navigate('HomePage' as never);
              }}
              isDisabled={selectedEmoji === null}>
              Send
            </Button>
          </Flex>
        </HStack>
      </Box>
    </Box>
  );
};
