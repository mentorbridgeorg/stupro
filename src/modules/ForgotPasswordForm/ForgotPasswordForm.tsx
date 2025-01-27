
import {  EmailIcon  } from '@assets/icons/EmailIcon';
import {  Button  } from '@atoms/Button';
import {  FormInput  } from '@molecules/FormInput';
import axios from 'axios';
import {  Box  } from 'native-base';
import { usePostHog } from 'posthog-react-native';
import React, {  useState  } from 'react';
import axios from 'axios';
import { sendData } from '@/api';

export const ForgotPasswordForm = () => {
  const posthog = usePostHog();

  const [forgotPasswordData, setForgotPasswordData] = useState('');
  const isValidEmail =
    forgotPasswordData &&
    forgotPasswordData !== '' &&
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(forgotPasswordData);

  const handleSubmit = () => {
    posthog.capture('forgotPasswordButton', {
      email: forgotPasswordData,
    });
    sendData(
        'http://ec2-35-87-21-24.us-west-2.compute.amazonaws.com:8080/init',
        {
          email: forgotPasswordData,
        },
      )
      .then(function (response) {
        console.log(response);
      })
     
  };

  return (
    <Box w="100%">
      <Box mb="6" mx="4">
        <Box>
          <FormInput
            label="Email"
            placeholder="example@gmail.com"
            onChange={text => {
              setForgotPasswordData(text);
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
