import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  Icon,
  Input,
  Stack,
  Text,
  WarningOutlineIcon,
} from 'native-base';
import React from 'react';
import { Path } from 'react-native-svg';
import { SocialLogin } from './SocialLogin';

export const EmailInput = ({
  setCurrentStep,
}: {
  setCurrentStep: (step: number) => void;
}) => {
  return (
    <Box>
      <Text
        fontSize={'3xl'}
        fontWeight={'bold'}
        color="font.primary"
        textAlign={'center'}>
        Sign Up
      </Text>
      <Box w="100%">
        <FormControl isRequired marginTop={'10'}>
          <Stack mx="10" w="80%">
            <Input
              type="text"
              size="lg"
              placeholder="example@gmail.com"
              w="100%"
              borderRadius={'10px'}
              borderColor={'primary.500'}
              borderWidth={'1px'}
              InputLeftElement={
                <Icon
                  size={5}
                  ml="2"
                  color="muted.400"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <Path
                    d="M1 2C0.447715 2 0 2.44772 0 3V12C0 12.5523 0.447715 13 1 13H14C14.5523 13 15 12.5523 15 12V3C15 2.44772 14.5523 2 14 2H1ZM1 3L14 3V3.92494C13.9174 3.92486 13.8338 3.94751 13.7589 3.99505L7.5 7.96703L1.24112 3.99505C1.16621 3.94751 1.0826 3.92486 1 3.92494V3ZM1 4.90797V12H14V4.90797L7.74112 8.87995C7.59394 8.97335 7.40606 8.97335 7.25888 8.87995L1 4.90797Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  />
                </Icon>
              }
              _focus={{
                borderColor: 'primary.500',
                borderWidth: '2px',
              }}
            />
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}>
              Atleast 6 characters are required.
            </FormControl.ErrorMessage>
          </Stack>
        </FormControl>
        <Text
          fontSize={'sm'}
          color="font.primary"
          mx="10"
          mt="5"
          mb="7"
          fontWeight={'bold'}>
          By clicking continue, you agree to our Terms of Service and Privacy
          Policy.
        </Text>
        <Box alignItems="center" mb="5">
          <Button
            width={'50%'}
            borderRadius={10}
            _text={{
              fontSize: 'md',
              fontWeight: 'bold',
              marginLeft: '0',
            }}
            onPress={() => setCurrentStep(1)}>
            Continue
          </Button>
        </Box>
        <Flex direction="row" alignItems="center" mb="5">
          <Divider
            orientation="horizontal"
            thickness="2"
            w="80%"
            mx="auto"
            bg="primary.500"
          />
        </Flex>
        <SocialLogin />
      </Box>
    </Box>
  );
};
