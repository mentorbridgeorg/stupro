/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import type {} from 'react';
import {StyleSheet, Image, Text, Pressable, ScrollView} from 'react-native';
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
  WarningOutlineIcon,
} from 'native-base';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';

const SignUpPage = () => {
  //setstate for userInfo
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  //setState for handling user infoErrors
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [checkError, setCheckError] = useState('');

  //Form validation
  const validateForm = () => {
    let isValid = true;

    //firstNmae validation
    if (!firstName.trim()) {
      setFirstNameError('First Name is Required');
      isValid = false;
    } else {
      setFirstNameError('');
    }

    //LastName validation
    if (!lastName.trim()) {
      setLastNameError('last Name is Required');
      isValid = false;
    } else {
      setLastNameError('');
    }

    //email validation
    if (!email.trim()) {
      setEmailError('Email Address is Required');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Enter a Valid Email Address');
      isValid = false;
    } else {
      setEmailError('');
    }

    //password validation
    if (!password.trim()) {
      setPasswordError('Password is Required');
      isValid = false;
    } else if (password.length < 8) {
      //length of pasword
      setPasswordError('Password must be at least 8 characters');
      isValid = false;
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      // checking special characters
      setPasswordError('Password must include at least one special character');
      isValid = false;
    } else {
      setPasswordError('');
    }

    //validation for accepting terms & conditon
    if (!isChecked) {
      setCheckError('You Must Agree to the terms and conditions.');
      isValid = false;
    } else {
      setCheckError('');
    }
    return isValid;
  };

  const handleSingnUp = async () => {
    if (validateForm()) {
      setLoading(true);
      try {
        console.log('user registered');
      } catch (error) {
        console.error('error registering user');
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      keyboardShouldPersistTaps="handled">
      <SafeAreaView>
        {/* {signup Image} */}
        <Image
          source={require('../assets/signup_logo.png')}
          style={styles.image}
        />
        <Center>
          <Box w="90%">
            {/* heading */}
            <Heading style={styles.heading}>Welcome To StuPro</Heading>
            <Text style={styles.subHead}>Create Account</Text>
            {/* Signup Form */}
            <Stack space={6} mt="2">
              <FormControl
                mt="10"
                isInvalid={!!firstNameError || !!lastNameError}>
                <HStack justifyContent="space-between">
                  {/* First and Last Name Label */}
                  <Text style={[styles.label, {flex: 1, textAlign: 'left'}]}>
                    First Name
                  </Text>
                  <Text style={[styles.label, {flex: 1, textAlign: 'left'}]}>
                    Last Name
                  </Text>
                </HStack>
                <HStack space={2} mt="1">
                  {/* First and Last Name TextInput */}
                  <Input
                    borderColor={'#0089B3'}
                    flex={1}
                    style={styles.input}
                    InputLeftElement={
                      <Icon name="user" size={22} style={styles.icon} />
                    }
                    value={firstName}
                    onChangeText={setFirstName}
                    placeholder="First Name"
                  />

                  <Input
                    borderColor={'#0089B3'}
                    flex={1}
                    style={styles.input}
                    InputLeftElement={
                      <Icon name="user" size={22} style={styles.icon} />
                    }
                    value={lastName}
                    onChangeText={setLastName}
                    placeholder="Last Name"
                  />
                </HStack>
                <HStack justifyContent="space-between">
                  {/* First and Last Name Error Message*/}
                  <FormControl.ErrorMessage
                    leftIcon={<WarningOutlineIcon size="xs" />}>
                    {firstNameError ? <Text>{firstNameError}</Text> : null}
                  </FormControl.ErrorMessage>
                  <FormControl.ErrorMessage
                    leftIcon={<WarningOutlineIcon size="xs" />}>
                    {lastNameError ? (
                      <Text style={{flex: 1, textAlign: 'left'}}>
                        {lastNameError}
                      </Text>
                    ) : null}
                  </FormControl.ErrorMessage>
                </HStack>
              </FormControl>
              <FormControl isInvalid={!!emailError}>
                {/* Email Address Label */}
                <Text style={styles.label}>Email Address</Text>
                {/* Email Address TextInput */}
                <Input
                  borderColor={'#0089B3'}
                  style={styles.inputtext}
                  InputLeftElement={
                    <Icon name="envelope" size={22} style={styles.icon} />
                  }
                  value={email}
                  onChangeText={setEmail}
                  placeholder="Email"
                />
                <FormControl.ErrorMessage
                  leftIcon={<WarningOutlineIcon size="xs" />}>
                  {/* Email Address Error*/}
                  {emailError ? <Text>{emailError}</Text> : null}
                </FormControl.ErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!passwordError}>
                {/* Password Label*/}
                <Text style={styles.label}>Password</Text>
                {/* Password TextInput*/}
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
                        name={show ? 'eye' : 'eye-slash'}
                        size={22}
                        style={styles.icon}
                      />
                    </Pressable>
                  }
                  value={password}
                  onChangeText={setPassword}
                  placeholder="Password"
                />
                <FormControl.ErrorMessage
                  leftIcon={<WarningOutlineIcon size="xs" />}>
                  {/* Password Error Message*/}
                  {passwordError ? <Text>{passwordError}</Text> : null}
                </FormControl.ErrorMessage>
              </FormControl>
            </Stack>
            {/* Terms & conditions checkbox*/}
            <Checkbox
              isChecked={isChecked}
              onChange={setIsChecked}
              color="green"
              value={''}
              mt="6">
              By checking, you agree to the terms and conditions & privacy
              policy.
            </Checkbox>
            {/* checkBox Error*/}
            {checkError ? (
              <>
                <Text style={{color: 'red', marginTop: 5}}>
                  <Icon name="warning" color="red" /> {checkError}
                </Text>
              </>
            ) : null}

            {/* Signup Button*/}
            <Button
              isLoading={loading}
              style={styles.button}
              _text={{fontWeight: 'bold', fontSize: 18}}
              onPress={handleSingnUp}>
              Sign up
            </Button>

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
            {/* Sign in Logo*/}
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
    </ScrollView>
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
    margin: 5,
    color: '#0089B3',
    fontSize: 30,
    fontFamily: 'Lusitana-Bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  subHead: {
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
    backgroundColor: '#FFFFFF',
  },
  inputtext: {
    fontSize: 15,
    fontFamily: 'inter',
    fontWeight: 'bold',
    backgroundColor: '#FFFFFF',
  },
  icon: {
    padding: 8,
    color: '#999999',
    backgroundColor: '#FFFFFF',
  },
  button: {
    color: '#0A6F8E',
    width: 130,
    alignSelf: 'center',
    borderRadius: 30,
    marginTop: 10,
    marginBottom: 5,
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
