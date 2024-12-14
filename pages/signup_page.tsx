/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import type {} from 'react';
import {StyleSheet, Image, Text, Pressable} from 'react-native';
import {
  Center,
  Box,
  Heading,
  FormControl,
  Input,
  Button,
  HStack,
  Stack,
  Checkbox,
  Divider,
} from 'native-base';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';

const SignUpPage = () => {
  const [show, setShow] = useState(false);
  return (
    <SafeAreaView>
      <Image
        source={require('../assets/signup_logo.png')}
        style={styles.image}
      />
      <Center>
        <Box w="90%">
          <Heading style={styles.heading}>Welcome To StuPro</Heading>
          <Text
            style={styles.subHead}>
            Create Account
          </Text>
          <Stack space={6} mt="2">
            <FormControl mt="10">
              <HStack justifyContent="space-between">
                <Text style={[styles.label, {flex: 1, textAlign: 'left'}]}>
                  First Name
                </Text>
                <Text style={[styles.label, {flex: 1, textAlign: 'left'}]}>
                  Last Name
                </Text>
              </HStack>
              <HStack space={2} mt="1">
                <Input
                  borderColor={'#0089B3'}
                  flex={1}
                  style={styles.input}
                  InputLeftElement={
                    <Icon name="user" size={22} style={styles.icon} />
                  }
                  placeholder="First Name"
                />
                <Input
                  borderColor={'#0089B3'}
                  flex={1}
                  style={styles.input}
                  InputLeftElement={
                    <Icon name="user" size={22} style={styles.icon} />
                  }
                  placeholder="Last Name"
                />
              </HStack>
            </FormControl>
            <FormControl>
              <Text style={styles.label}>Email Address</Text>
              <Input
                borderColor={'#0089B3'}
                style={styles.inputtext}
                InputLeftElement={
                  <Icon name="envelope" size={22} style={styles.icon} />
                }
                placeholder="Email"
              />
            </FormControl>
            <FormControl>
              <Text style={styles.label}>Password</Text>
              <Input
                borderColor={'#0089B3'}
                style={styles.inputtext}
                InputLeftElement={
                  <Icon name="lock" size={30} style={styles.icon} />
                }
                type={show ? 'text' : 'password'}
                InputRightElement={
                  <Pressable onPress={() => setShow(!show)}>
                    <Icon
                      name={show ? 'eye-slash' : 'eye-slash'}
                      size={22}
                      style={styles.icon}
                    />
                  </Pressable>
                }
                placeholder="Password"
              />
            </FormControl>
            <Button
              style={styles.button}
              _text={{fontWeight: 'bold', fontSize: 18}}>
              Sign up
            </Button>
          </Stack>
          <Checkbox color="green" value={''}>
            By Signingup,you are agree to the terms and conditions & privacy
            policy
          </Checkbox>
          <HStack space={5} mt="6" justifyContent="space-between">
            <Divider
              width="150"
              _light={{
                bg: 'muted.800',
              }}
            />
            <Text>Or</Text>
            <Divider
              width="150"
              _light={{
                bg: 'muted.800',
              }}
            />
          </HStack>
          <Text style={styles.text}>Sign in With</Text>
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
        </Box>
      </Center>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    alignSelf: 'center',
  },
  // linearGradient: {
  //   flex: 1,
  //   paddingLeft: 15,
  //   paddingRight: 15,
  //   borderRadius: 5
  // },
  heading: {
    margin:5,
    color: '#0089B3',
    fontSize: 30,
    fontFamily: 'Lusitana-Bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  subHead:{
    fontSize: 20,
    fontWeight: '700',
    fontFamily: 'Lusitana-Regular',
    color: '#0089B3',
    textAlign: 'center',
  },
  label: {
    fontSize: 14,
    fontFamily: 'Lusitana-Bold',
  },
  input: {
    fontSize: 13,
    fontFamily: 'inter',
    fontWeight: 'bold',
    backgroundColor:'#FFFFFF',
  },
  inputtext: {
    fontSize: 15,
    fontFamily: 'inter',
    fontWeight: 'bold',
    backgroundColor:'#FFFFFF',
  },
  icon: {
    padding: 8,
    color: '#999999',
    backgroundColor:'#FFFFFF',
  },
  button: {
    color: '#0A6F8E',
    width: 100,
    alignSelf: 'center',
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 10,
  },
  logo: {
    width: 30,
    height: 30,
    margin: 15,
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    fontSize: 15,
    fontFamily: 'inter',
    textAlign: 'center',
    color: '#0089B3',
  },
});

export default SignUpPage;
