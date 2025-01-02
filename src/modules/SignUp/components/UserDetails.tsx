import {useAtom, useAtomValue} from 'jotai';
import {Box, Button, Text} from 'native-base';
import React from 'react';
import {currentStepAtom, signUpDataAtom} from '../atoms';
import {ProfessionalFields} from './ProfessionalFields';
import {StudentFields} from './StudentFields';

export const UserDetails = () => {
  const [currentStep, setCurrentStep] = useAtom(currentStepAtom);
  const signUpData = useAtomValue(signUpDataAtom);
  const handleContinue = () => {
    setCurrentStep(currentStep + 1);
  };

  return (
    <Box>
      <Text
        fontSize={'3xl'}
        fontWeight={'bold'}
        color="font.primary"
        textAlign={'center'}>
        User Details
      </Text>
      {signUpData?.userType === 'student' ? (
        <StudentFields />
      ) : (
        <ProfessionalFields />
      )}
      <Box alignItems="center" mb="5" mt="5">
        <Button
          width={'50%'}
          borderRadius={10}
          _text={{
            fontSize: 'md',
            fontWeight: 'bold',
            marginLeft: '0',
          }}
          onPress={handleContinue}>
          Continue
        </Button>
      </Box>
    </Box>
  );
};
