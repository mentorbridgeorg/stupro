
import { sendData } from '@/api';
import axios from 'axios';
import {Box, Button, Input} from 'native-base';
import {usePostHog} from 'posthog-react-native';
import React, {useRef, useState} from 'react';
import {TextInput} from 'react-native';

export const OTPForm = () => {
  const [otp, setOtp] = useState<string[]>(['', '', '', '']);
  const inputsRef = useRef<(TextInput | null)[]>([]);

  const posthog = usePostHog();
  const handleOtpChange = (text: string, index: number) => {
    if (/^\d*$/.test(text)) {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);
      if (text && index < otp.length - 1) {
        inputsRef.current[index + 1]?.focus();
      }
    }
  };
  const isSubmitEnabled = otp.every(digit => digit !== '');

  const handleSubmit = () => {
    posthog.capture('OTP Button');

      sendData('http://ec2-35-87-21-24.us-west-2.compute.amazonaws.com:8092/otp', {

        otp: otp.join(''),
      })
      .then(response => {
        console.log(response);
      })
      
  };

  return (
    <Box w="100%" p="4">
      <Box flexDirection="row" justifyContent="center" mt="2">
        {otp.map((digit, index) => (
          <Input
            key={index}
            ref={el => (inputsRef.current[index] = el)}
            maxLength={1}
            value={digit}
            onChangeText={text => handleOtpChange(text, index)}
            keyboardType="number-pad"
            color="black"
            textAlign="center"
            mx="2"
            w="12"
            h="12"
            _input={{
              textAlign: 'center',
              fontSize: 'lg',
            }}
            _focus={{
              borderColor: 'primary.100',
              bg: 'blue.50',
            }}
            borderWidth={1}
            borderColor="#ccc"
            borderRadius="10"
            bg="#f8f8f8"
            onKeyPress={({ nativeEvent }) => {
              if (nativeEvent.key === 'Backspace' && !digit && index > 0) {
                inputsRef.current[index - 1]?.focus();
              }
            }}
          />
        ))}
      </Box>
      <Box alignItems="center" pt="10">
        <Button onPress={handleSubmit} isDisabled={!isSubmitEnabled}>
          Submit
        </Button>
      </Box>
    </Box>
  );
};
