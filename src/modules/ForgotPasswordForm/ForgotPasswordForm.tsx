
import { EmailIcon } from '@assets/icons/EmailIcon';
import { Button } from '@atoms/Button';
import { FormInput } from '@molecules/FormInput';
import { Box } from 'native-base';
import React, { useState } from 'react';
import axios from 'axios';

export const ForgotPasswordForm = () => {

  const [forgotPasswordData, setForgotPasswordData] = useState('');
  
  const isValidEmail =
    forgotPasswordData &&
    forgotPasswordData !== '' &&
      /^[a-z0-9_.+-]+@[a-z0-9]+\.[a-z0-9-.]+$/.test(forgotPasswordData);
   


  const handleSubmit = () => {

    axios.post('http://ec2-35-87-21-24.us-west-2.compute.amazonaws.com:8080/init', {
      email: forgotPasswordData
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
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
              setForgotPasswordData(text,)
            }}
            icon={<EmailIcon />}
          />
        </Box>
      </Box>
      <Box alignItems="center" mb="5" mt="5">
        <Button 
        onPress={handleSubmit}
         isDisabled={!isValidEmail}>
          Submit
        </Button>
      </Box>
    </Box>
  );
};
