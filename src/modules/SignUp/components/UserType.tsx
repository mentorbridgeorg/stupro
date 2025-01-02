import {useAtom, useSetAtom} from 'jotai';
import {
  Badge,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Pressable,
  Text,
} from 'native-base';
import React, {useState} from 'react';
import {ProfessionalIcon} from '../../../assets/icons/ProfessionalIcon';
import {StudentIcon} from '../../../assets/icons/StudentIcon';
import {theme} from '../../../theme';
import {currentStepAtom, signUpDataAtom} from '../atoms';

export const UserType = () => {
  const setCurrentStep = useSetAtom(currentStepAtom);
  const [signUpData, setSignUpData] = useAtom(signUpDataAtom);

  const userTypes = [
    {
      type: 'student',
      icon: <StudentIcon />,
    },
    {
      type: 'professional',
      icon: <ProfessionalIcon />,
    },
  ];

  return (
    <Box>
      <Heading size="xl" color="font.primary" textAlign="center">
        Choose user type
      </Heading>
      <Box w="100%" mt="3">
        <Text fontSize={'lg'} color="font.primary" mb="5" textAlign="center">
          Please select your profession
        </Text>
        <Box mb="5">
          <HStack space={3} justifyContent="center">
            {userTypes.map(type => (
              <Center w="50%" key={type.type}>
                <Pressable
                  onPress={() =>
                    setSignUpData({
                      ...signUpData,
                      userType: type.type as 'student' | 'professional',
                    })
                  }
                  borderColor="muted.300"
                  rounded="8"
                  w="80%"
                  borderWidth="1"
                  borderStyle="solid"
                  boxShadow={
                    type.type === signUpData?.userType
                      ? `0 0 2px 2px ${theme.colors.font.primary}`
                      : 'none'
                  }
                  p="5">
                  <Flex direction="column" alignItems="center" gap="3">
                    {type.icon}
                    <Badge
                      colorScheme="primary"
                      _text={{
                        color: 'white',
                      }}
                      variant="solid"
                      rounded="4">
                      {type.type.toUpperCase()}
                    </Badge>
                  </Flex>
                </Pressable>
              </Center>
            ))}
          </HStack>
        </Box>
        <Box alignItems="center" mb="5">
          <Button
            width={'50%'}
            borderRadius={10}
            _text={{
              fontSize: 'md',
              fontWeight: 'bold',
              marginLeft: '0',
            }}
            isDisabled={!signUpData?.userType}
            onPress={() => setCurrentStep(2)}>
            Continue
          </Button>
        </Box>
      </Box>
    </Box>
  );
};