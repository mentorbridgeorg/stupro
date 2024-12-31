import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Colors from '../themes/colors';
import {
  Center,
  Box,
  Button,
  Card,
  HStack,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
const SelectUserTypeScreen = () => {
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
        <Text style={styles.text}>Choose User Type</Text>

        <View>
          <Text style={styles.selectText}>Please Select Your Profession</Text>
          <HStack>
            <Card style={styles.card}>
              <Image source={require('../assets/graduation.png')} style={styles.cardImage}/>
              <Text style={styles.cardText}>Student</Text>
            </Card>
            <Card style={styles.card}>
            <Image source={require('../assets/employee.png')} style={styles.cardImage}/>
              <Text style={styles.cardText}>Professional</Text>
            </Card>
          </HStack>
        </View>
        <Center>
          <Button style={styles.continuebutton} width={150} bg="#F3C331">
            Continue
          </Button>
        </Center>
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
  selectText: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Open-Sans',
    color: '#064356',
    padding: 10,
    marginLeft: 20,
  },
  card: {
    width: 150,
    height: 120,
    margin: 25,
    alignItems: 'center', 
    justifyContent: 'center',
    borderColor: '#F3C331', 
    borderWidth: 2, 
    borderRadius: 10,
    backgroundColor: '#fff', 
    elevation: 3, 
  },
  cardImage:{
   marginTop:20,
  },
 cardText:{
 marginTop:12,
 textAlign:'center',
 fontSize:15,
 fontWeight:'bold',
 color:'black',
 },
  continuebutton: {
    borderRadius: 20,
    marginTop: 15,
    backgroundColor: '#F3C331',
  },
});

export default SelectUserTypeScreen;
