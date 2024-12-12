import React from 'react';
import type {} from 'react';
import {StyleSheet, Image} from 'react-native';
import {
  Center,
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
} from 'native-base';
import {SafeAreaView} from 'react-native-safe-area-context';

const SignUpPage = () => {
  return (
    <SafeAreaView>
      <Image
        source={require('../assets/signup_logo.png')}
        style={styles.image}
      />
      <Center>
        <Box>
          <Heading style={styles.heading}>Create Account</Heading>
          <VStack space={2} mt="2">
            <FormControl>
              <Input style={styles.input} variant="underlined" placeholder="Full Name" inlineImageLeft='' />
            </FormControl>
            <FormControl>
              <Input style={styles.input}  variant="underlined" placeholder="Email" />
            </FormControl>
            <FormControl>
              <Input
              style={styles.input}
                variant="underlined"
                type="password"
                placeholder="password"
              />
            </FormControl>
            <Button style={styles.button}>Sign up</Button>
          </VStack>
        </Box>
      </Center>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
    marginLeft: 50,
    
  },
  heading: {
    marginBottom: 10,
    color: '#0089B3',
    fontSize: 30,
    fontWeight:900,
    fontFamily:'inter',
  },
  input:{
    fontSize:18,
    color:'#999999',
    fontFamily:'inter',
    fontWeight:'bold',
  },
  button:{
    marginTop:25,
    color:'#04A8DB',
  }
});

export default SignUpPage;
