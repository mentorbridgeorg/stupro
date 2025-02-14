import {useNavigation} from '@react-navigation/native';
import {Box, VStack} from 'native-base';
import React, {useEffect, useRef, useState} from 'react';
import Options from './components/Options';
import {Animated, Image, TouchableOpacity} from 'react-native';
import {EditIcon} from '../../assets/icons/EditIcon';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Profile = () => {
  const navigation = useNavigation();
  const Position = [
    {value: 'student', background: 'yellow.300'},
    {value: 'professional', background: 'orange.300'},
  ];

  const [name, setName] = useState('Name');
  const [designation, setDesignation] = useState('Designation');
  const [role, setRole] = useState('Role');

  const handleBg: () => any = () => {
    return Position.find(findValue => findValue.value === role)?.background;
  };

  useEffect(() => {
    loadFromAsyncStorage();
  }, []);

  const loadFromAsyncStorage = async () => {
    try {
      const value = await AsyncStorage.getItem('user');
      if (value !== null) {
        const data = JSON.parse(value);
        // console.log('Data retrieved:', data);
        setName(
          [data.userDetails.firstName, data.userDetails.lastName].join(' '),
        );
        setRole(data.userType);
        {
          data.userType === 'student'
            ? setDesignation(data.userDetails.college)
            : setDesignation(data.userDetails.designation);
        }
      }
    } catch (error) {
      console.error('Failed to load data:', (error as Error).message);
    }
  };

  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(50)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 600, // Animation duration
        useNativeDriver: true,
      }),
      Animated.spring(translateY, {
        toValue: 0,
        damping: 14, // Controls bounce effect
        stiffness: 100, // Adjust stiffness for smoothness
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <Box flex={1}>
      <Box>
        <Image
          source={require('../../../assets/ProfileTop.png')}
          resizeMode="contain"
        />
      </Box>
      <Box position={'absolute'} top={1} left={0} right={0} p={5}>
        <TouchableOpacity
          style={{alignSelf: 'flex-end', marginRight: 10, marginTop: 10}}
          onPress={() => navigation.navigate('EditProfile')}>
          <EditIcon />
        </TouchableOpacity>
      </Box>
      // name, designation, role
      <Box position={'absolute'} top={100} left={0} right={0} p={5} ml={2}>
        <Animated.View style={{opacity, transform: [{translateY}]}}>
          <Box _text={{color: 'black', fontSize: 50, fontWeight: '700'}}>
            {name}
          </Box>
        </Animated.View>
        <Animated.View style={{opacity, transform: [{translateY}]}}>
          <Box _text={{color: 'black', fontSize: 20, fontWeight: '400', pl: 1}}>
            {designation}
          </Box>
        </Animated.View>

        <Animated.View style={{opacity, transform: [{translateY}]}}>
          <Box
            bg={handleBg()}
            borderRadius={13}
            mt={2}
            mr={250}
            p={2}
            _text={{
              color: 'black',
              fontSize: 15,
              fontWeight: '500',
              textAlign: 'center',
            }}>
            {role}
          </Box>
        </Animated.View>
      </Box>
      // Settings
      <VStack marginX={7} mb={20} space={2}>
        <Options
          Component={'Change Password'}
          onPress={() => {
            navigation.navigate('ChangePassword');
          }}
        />
        <Options
          Component={'Preferences'}
          onPress={() => {
            navigation.navigate('Preferences');
          }}
        />
        <Options Component={'Bookmarks'} onPress={() => {}} />
      </VStack>
      <Box position={'absolute'} bottom={-20} width={'100%'}>
        <Image source={require('../../../assets/ProfileBottom.png')} />
      </Box>
    </Box>
  );
};
