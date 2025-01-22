import {currentStepAtom} from '@modules/SignUp/atoms';
import {FocusedCard} from '@organisms/FocusedCard';
import {useAtom} from 'jotai';
import {Box} from 'native-base';
import React from 'react';
import {steps} from './steps';

export const SignUp = () => {
  const [currentStep, setCurrentStep] = useAtom(currentStepAtom);
  const handleBackButtonPress = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  return (
    <Box>
      <FocusedCard
        imageSource={steps[currentStep].image}
        onBackButtonPress={handleBackButtonPress}
        isDisplayBackButton={currentStep > 1}>
        {steps[currentStep].component}
      </FocusedCard>
    </Box>
  );
};
