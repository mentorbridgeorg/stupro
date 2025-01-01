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
import {ProfessionalIcon} from './ProfessionalIcon';
import {StudentIcon} from './StudentIcon';
import {theme} from '../../../theme';
export const UserType = ({
  setCurrentStep,
}: {
  setCurrentStep: (step: number) => void;
}) => {
  const [selectedUserType, setSelectedUserType] = useState<
    'student' | 'professional' | null
  >(null);

  const handleUserTypeChange = (type: 'student' | 'professional') => {
    setSelectedUserType(type);
  };

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
            {userTypes.map(userType => (
              <Center w="50%" key={userType.type}>
                <Pressable
                  onPress={() =>
                    handleUserTypeChange(
                      userType.type as 'student' | 'professional',
                    )
                  }
                  borderColor="muted.300"
                  rounded="8"
                  w="80%"
                  borderWidth="1"
                  borderStyle="solid"
                  boxShadow={
                    userType.type === selectedUserType
                      ? `0 0 2px 2px ${theme.colors.font.primary}`
                      : 'none'
                  }
                  p="5">
                  <Flex direction="column" alignItems="center" gap="3">
                    {userType.icon}
                    <Badge
                      colorScheme="primary"
                      _text={{
                        color: 'white',
                      }}
                      variant="solid"
                      rounded="4">
                      {userType.type.toUpperCase()}
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
            onPress={() => setCurrentStep(2)}>
            Continue
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
