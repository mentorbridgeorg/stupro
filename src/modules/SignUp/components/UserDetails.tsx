import {Button} from '@atoms/Button';
import {useAtom, useAtomValue} from 'jotai';
import {Box, Text} from 'native-base';
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

  const isUserDetailsValid = () => {
    if (signUpData?.userType === 'student') {
      return (
        signUpData?.userDetails?.degree !== '' &&
        signUpData?.userDetails?.college !== ''
      );
    } else {
      return (
        signUpData?.userDetails?.designation !== '' &&
        signUpData?.userDetails?.company !== ''
      );
    }
  };

  return (
    <Box>
      <Text
        fontSize={'3xl'}
        fontWeight={'bold'}
        color="font.primary"
        textAlign={'center'}
        mb={'2'}>
        User Details
      </Text>
      {signUpData?.userType === 'student' ? (
        <StudentFields />
      ) : (
        <ProfessionalFields />
      )}
      <Box alignItems="center" mb="5" mt="5">
        <Button onPress={handleContinue} isDisabled={!isUserDetailsValid}>
          Continue
        </Button>
      </Box>
    </Box>
  );
};
