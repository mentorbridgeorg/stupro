import {EmailIcon} from '@assets/icons/EmailIcon';
import {Button} from '@atoms/Button';
import {FormInput} from '@molecules/FormInput';
import {Box} from 'native-base';
import React, {useState} from 'react';
import {usePostHog} from "posthog-react-native"

export const ForgotPasswordForm = () => {
  const [forgotPasswordData, setForgotPasswordData] = useState({
    email: '',
  });
  const isValidEmail =
    forgotPasswordData?.email &&
    forgotPasswordData?.email !== '' &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(forgotPasswordData?.email);

    
   const posthog = usePostHog();

  const handleSubmit = () => {
    posthog.capture("forgotPasswordButton", {
      email: forgotPasswordData.email,
    });
  
    };
  return (
    <Box w="100%">
      <Box mb="6" mx="4">
        <Box>
          <FormInput
            label="Email"
            placeholder="example@gmail.com"
            onChange={text => {
              setForgotPasswordData({...forgotPasswordData, email: text});
            }}
            icon={<EmailIcon />}
          />
        </Box>
      </Box>
      <Box alignItems="center" mb="5" mt="5">
        <Button onPress={handleSubmit} isDisabled={!isValidEmail}>
          Submit
        </Button>
      </Box>
    </Box>
  );
};
