import React from 'react';
import {Image, Pressable, SafeAreaView, StyleSheet, Text} from 'react-native';
import {Box, Input, Button, View, Center, FormControl} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../themes/colors';
// import SelectUserTypeScreen from './SelectUserTypeScreen';

const SignUpscreen = () => {

  return (
    <SafeAreaView style={styles.bgColor}>
      <View style={styles.header}>
        <Icon
          name="chevron-left"
          size={20}
          color="black"
          style={styles.backIcon}
        />
        <Text style={styles.appName}>Logo/StuPro</Text>
      </View>
      <Center>
        <Image
          source={require('../assets/SetAsResume.png')}
          style={styles.image}
        />
      </Center>
      <Box style={styles.box}>
        <Text style={styles.text}>Sign Up</Text>

        <View style={styles.input}>
          <FormControl>
            <Input
              size="lg"
              placeholder="Email"
              placeholderTextColor="#064356"
              keyboardType="email-address"
              borderRadius={20}
              style={styles.inputField}
              leftElement={
                <MaterialIconsIcon
                  name="mail"
                  size={20}
                  style={styles.mailIcon}
                />
              }
            />
          </FormControl>
        </View>

        <Text style={styles.termstext}>
          By continuing, you agree to our Terms & Conditions
        </Text>
        <Center>
          <Button style={styles.continuebutton} width={150} bg="#F3C331">
            Continue
          </Button>
        </Center>
        <View style={styles.lineContainer}>
          <View style={styles.line} />
          <Text style={styles.or}>Or</Text>
          <View style={styles.line} />
        </View>
        <View style={styles.logoContainer}>
          <Pressable>
            <Image
              style={styles.logo}
              source={require('../assets/google.png')}
            />
          </Pressable>
          <Pressable>
            <Image
              style={styles.logo}
              source={require('../assets/LinkedIn.png')}
            />
          </Pressable>
        </View>
      </Box>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bgColor: {
    backgroundColor: Colors.backgroundColor,
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  backIcon: {
    marginRight: 20,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontFamily: 'OpenSans-ExtraBold',
  },
  image: {
    width: 230,
    height: 230,
    alignSelf: 'center',
    marginTop: 40,
  },
  box: {
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingBottom: 20,
    elevation: 10,
    minHeight: '50%',
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#0A6F8E',
    fontSize: 30,
    margin: 25,
  },
  input: {
    position: 'relative',
    marginTop: 15,
    width: '80%',
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#1E1E1E',
    shadowColor: '#125B72',
    shadowRadius: 15,
    elevation: 5,
  },
  inputField: {
    fontFamily: 'Inter_28pt-Bold',
    fontSize: 14,
    paddingBottom: 8,
  },
  mailIcon: {
    padding: 10,
    color: '#0A6483',
  },
  termstext: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'Lusitana',
    color: '#295360',
  },
  continuebutton: {
    borderRadius: 20,
    marginTop: 15,
    backgroundColor: '#F3C331',
  },
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    width: '80%',
    alignSelf: 'center',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'black',
  },
  or: {
    marginHorizontal: 10,
    color: '#0A6483',
    fontSize: 14,
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  logo: {
    width: 28,
    height: 28,
    margin: 10,
  },
});

export default SignUpscreen;
