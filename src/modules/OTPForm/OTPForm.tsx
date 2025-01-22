import {Box, Button, Input} from 'native-base';
import React, {useRef, useState} from 'react';

export const OTPForm = () => {
  const [otp, setOtp] = useState<string[]>(['', '', '', '']);
  const inputsRef = useRef<(any | null)[]>([]);

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
            onKeyPress={({nativeEvent}) => {
              if (nativeEvent.key === 'Backspace' && !digit && index > 0) {
                inputsRef.current[index - 1]?.focus();
              }
            }}
          />
        ))}
      </Box>
      <Box alignItems="center" pt="10">
        <Button
          onPress={() => {
            console.log('OTP Submitted:', otp.join(''));
          }}
          isDisabled={!isSubmitEnabled}>
          Submit
        </Button>
      </Box>
    </Box>
  );
};
