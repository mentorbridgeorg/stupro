import {Button} from '@atoms/Button';
import {FormInput} from '../../../ui/molecules/FormInput';
import {useAtom} from 'jotai';
import {Box, Stack, Text} from 'native-base';
import React from 'react';
import {currentStepAtom, signUpDataAtom} from '../atoms';
export const NameDetails = () => {
  const [currentStep, setCurrentStep] = useAtom(currentStepAtom);
  const [signUpData, setSignUpData] = useAtom(signUpDataAtom);
  const handleContinue = () => {
    setCurrentStep(currentStep + 1);
  };

  const isNameDetailsValid =
    signUpData?.userDetails?.firstName &&
    signUpData?.userDetails?.lastName &&
    signUpData?.userDetails?.firstName !== '' &&
    signUpData?.userDetails?.lastName !== '';

  return (
    <Box>
      <Text
        fontSize={'3xl'}
        fontWeight={'bold'}
        color="font.primary"
        textAlign={'center'}>
        Hello {signUpData?.userDetails?.firstName}
      </Text>
      <Box w="100%">
        <Stack mx="10" w="80">
          <FormInput
            label="First Name"
            value={signUpData?.userDetails?.firstName}
            placeholder="First Name"
            onChange={text =>
              setSignUpData({
                ...signUpData,
                userDetails: {...signUpData.userDetails, firstName: text},
              })
            }
          />
        </Stack>
        <Stack mx="10" w="80" mt="3">
          <FormInput
            label="Last Name"
            value={signUpData?.userDetails?.lastName}
            placeholder="Last Name"
            onChange={text =>
              setSignUpData({
                ...signUpData,
                userDetails: {...signUpData.userDetails, lastName: text},
              })
            }
          />
        </Stack>
      </Box>
      <Box alignItems="center" mb="5" mt="5">
        <Button onPress={handleContinue} isDisabled={!isNameDetailsValid}>
          Continue
        </Button>
      </Box>
    </Box>
  );
};
