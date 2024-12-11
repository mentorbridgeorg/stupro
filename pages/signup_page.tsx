import React, {useState} from 'react';
import {Button, SafeAreaView, StyleSheet, Text, TextInput} from 'react-native';



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

  function alert(_arg0: string) {
    throw new Error('Function not implemented.');
  }
  return (
    <SafeAreaView  style={styles.container}>

      <Text style={styles.heading}>Sign Up </Text>

      <Text style={styles.label}>First Name</Text>
      {/* Fisrt Name Input Field */}
      <TextInput
        style={styles.input}
        onChangeText={setFirstName}
        value={firstName}
        placeholder="Enter Your Second Name"
        keyboardType="default"
      />

      <Text>Last Name</Text>
      {/* Last Name Input Field */}
      <TextInput
        style={styles.input}
        onChangeText={setLastName}
        value={lastName}
        placeholder="Enter Your Last Name"
        keyboardType="default"
      />

      <Text>Email</Text>
      {/* Email Name Input Field */}
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Enter Your Email"
        keyboardType="email-address"
      />

      <Text>Password</Text>
      {/* Password Name Input Field */}
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
    marginTop: 150,
    display: 'flex',
    justifyContent: 'center',
    margin: 40
  },

  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBlockEnd: 15,
  },
  input: {
    height: 40,
    marginVertical: 15,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  label: {
    color: '#00b3ee',
  },
});

export default SignUpPage;
