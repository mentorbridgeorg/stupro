import React from 'react';
import { Box, Button, FormControl, HStack, Input, Modal, ScrollView, Text, View, VStack, Fab, Icon } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const getFormattedDate = (index: number) => {
  const date = new Date();
  date.setDate(date.getDate() - index);
  const month = date.toLocaleString('en-US', {month:'short'});
  const day = date.getDate();
  const weekday = date.toLocaleString('en-US', {weekday:'short'});
  return {day,month,weekday};
};

export const SentencePage = () => {
  const sentences = [
    "This is the sentence for Day 1.",
    "This is the sentence for Day 2.",
    "This is the sentence for Day 3.",
    "This is the sentence for Day 4.",
    "This is the sentence for Day 5.",
    "This is the sentence for Day 6.",
    "This is the sentence for Day 7."
  ];

  const [modalVisible, setModalVisible] = React.useState(false);
  const initialRef = React.useRef(null);
  return (
    <View flex={1} backgroundColor="white">
      <ScrollView>
        <View p={4}>
          <Text color="black" fontSize={22} textAlign="center" fontWeight="bold" mb={4}>
            Sentences of the Week!
          </Text>

          <VStack space={4}>
            {sentences.map((text, index) => {
              const { day, month, weekday } = getFormattedDate(index);

              return (
                <Box key={index} p={4} borderRadius={10} backgroundColor="white" shadow={2}>
                  <HStack space={4} alignItems="center">
                    <LinearGradient
                      colors={['#FFD700', '#FFFFFF']}
                      style={{
                        padding: 10,
                        borderRadius: 8,
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 70,
                      }}>
                      <Text fontSize={16} fontWeight="bold" color="black">{month}</Text>
                      <Text fontSize={16} fontWeight="bold" color="black">{day}</Text>
                      <Text fontSize={12} color="black">{weekday}</Text>
                    </LinearGradient>
                    <VStack flex={1}>
                      <Text fontSize={16} fontWeight="bold" color="black">{text}</Text>
                    </VStack>
                  </HStack>
                </Box>
              );
            })}
          </VStack>
        </View>
      </ScrollView>

      <Fab
        position="absolute"
        size="lg"
        icon={<Icon as={MaterialIcons} name="edit" size="lg" color="white" />}
        onPress={() => setModalVisible(true)}
        bottom={16}
        right={6}
        backgroundColor="yellow.500"/>

      <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)} initialFocusRef={initialRef}>
        <Modal.Content backgroundColor="white" style={{ elevation:5}}>
          <Modal.CloseButton marginTop={2}/>
          <Modal.Header backgroundColor="white" borderBottomWidth={0}>
            <Text color="black" fontWeight={'bold'} fontSize={16} mt={2}>Frame something with these phrases</Text>
          </Modal.Header>
          <Modal.Body backgroundColor="white">
            <FormControl>
              <Input ref={initialRef} placeholder="Type here..."  height={20} color="black"  />
            </FormControl>
          </Modal.Body>
          <Modal.Footer backgroundColor="white" borderTopWidth={0}>
            <Button borderRadius={10} onPress={() => setModalVisible(false)}>
              <Text color="white">Submit</Text>
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </View>
  );
};

