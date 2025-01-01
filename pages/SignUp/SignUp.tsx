import {Box} from 'native-base';
import React, {useState} from 'react';
import {FocusedCard} from '../../ui/organisms/FocusedCard/FocusedCard';
import {EmailInput} from './components/EmailInput';
import {UserType} from './components/UserType';

export const SignUp = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [signUpData, setSignUpData] = useState<{
    email: string;
    userType: 'student' | 'professional' | null;
  }>({
    email: '',
    userType: null,
  });

  const moveToNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const steps = [
    {
      title: 'Email',
      image:
        'https://cdni.iconscout.com/illustration/premium/thumb/sign-up-illustration-download-in-svg-png-gif-file-formats--log-register-form-user-interface-pack-design-development-illustrations-6430773.png',
      component: <EmailInput setCurrentStep={setCurrentStep} />,
    },
    {
      title: 'User Type',
      image:
        'https://cdni.iconscout.com/illustration/premium/thumb/sign-up-illustration-download-in-svg-png-gif-file-formats--log-register-form-user-interface-pack-design-development-illustrations-6430773.png',
      component: <UserType setCurrentStep={setCurrentStep} />,
    },
  ];
  return (
    <Box>
      <FocusedCard title="ST2PRO" imageSource={steps[currentStep].image}>
        {steps[currentStep].component}
      </FocusedCard>
    </Box>
  );
};
