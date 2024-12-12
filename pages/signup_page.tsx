/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import type {} from 'react';
import {StyleSheet, Image, Text} from 'react-native';
import {
  Center,
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
  HStack,
} from 'native-base';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';

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
              <HStack style={styles.inputContainer}>
                <Icon name="user" size={25} style={styles.icon} />
                <Input
                  style={styles.input}
                  variant="underlined"
                  placeholder="Full Name"
                />
              </HStack>
            </FormControl>
            <FormControl>
              <HStack style={styles.inputContainer}>
                <Icon name="envelope" size={22} style={styles.icon} />
                <Input
                  style={styles.input}
                  variant="underlined"
                  placeholder="Email"
                />
              </HStack>
            </FormControl>
            <FormControl>
              <HStack style={styles.inputContainer}>
                <Icon name="lock" size={30} style={styles.icon} />
                <Input
                  style={styles.input}
                  variant="underlined"
                  type="password"
                  placeholder="password"
                />
              </HStack>
            </FormControl>
            <Button style={styles.button}>Sign up</Button>
          </VStack>
          <HStack style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require('../assets/google.png')}
            />
            <Image
              style={styles.logo}
              source={require('../assets/linkdin.png')}
            />
          </HStack>
          <HStack style={styles.loginText}>
            <Text style={styles.text}>
              Already User?
              <Text style={{color: '#0A6F8E'}}>Log In</Text>
            </Text>
          </HStack>
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
    color: '#0089B3',
    fontSize: 30,
    fontWeight: 900,
    fontFamily: 'inter',
    textAlign: 'center',
    marginBottom: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    borderColor: '#E0E0E0',
    paddingHorizontal: 10,
    paddingVertical: 5,
    height: 60,
    width: 300,
  },
  input: {
    fontSize: 15,
    fontFamily: 'inter',
    fontWeight: 'bold',
    marginRight: 50,
  },
  icon: {
    marginRight: 15,
    color: '#999999',
  },
  button: {
    marginTop: 10,
    color: '#0A6F8E',
    width: 100,
    marginLeft: 100,
  },
  logo: {
    width: 30,
    height: 30,
    margin: 30,
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  loginText: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: 15,
    fontFamily: 'inter',
  },
});

export default SignUpPage;
