import React, { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

const SignUpPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Handle sign-up logic 
    console.log({
      firstName,
      lastName,
      email,
      password,
    });
    alert('Sign Up successful!');
  };

  function alert(arg0: string) {
    throw new Error('Function not implemented.');
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading} >Sign Up </Text>
       {/* Fisrt Name Input Field */}
      <Text>First Name</Text>
      <TextInput
        style={styles.input}
        onChangeText={setFirstName}
        value={firstName}
        placeholder="Enter Your First Name"
        keyboardType="default"
      />
     {/* Last Name Input Field */}
      <Text>Last Name</Text>
      <TextInput
        style={styles.input}
        onChangeText={setLastName}
        value={lastName}
        placeholder="Enter Your Last Name"
        keyboardType="default"
      />
      {/* Email Name Input Field */}
      <Text>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Enter Your Email"
        keyboardType="email-address"
      />
    {/* Password Name Input Field */}
      <Text>Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Enter Your Password"
        secureTextEntry
      />
     {/* Button */}
      <Button title="Sign Up" onPress={handleSignUp} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    marginTop:150,
    height:200,
    width:300,
    marginLeft:50,
    
  },
 
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBlockEnd:15,
  },
  input: {
    height: 40,
    marginVertical: 15,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    
  },
});

export default SignUpPage;


