import {useNavigation} from '@react-navigation/native';
import {Box, Center, Image, View, VStack} from 'native-base';
import React, {useEffect, useRef, useState} from 'react';
import {Animated, TouchableOpacity, useWindowDimensions} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {theme} from '@/theme';
import Options from './components/Options';
import {EditIcon} from '../../assets/icons/EditIcon';
import ProfileStreakDesign from '../../../assets/profile_streak_design.svg';
import EditIconDesign from '../../../assets/Edit_Icon.svg';
import BackButtonDesign from '../../../assets/Back_design.svg';

export const Profile = () => {
  const {width} = useWindowDimensions();
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
    <Box bg={theme.colors.primary[400]} flex={1}>
      <Box>
        <BackButtonDesign height={50} width={50} />
        <EditIconDesign
          height={80}
          width={80}
          style={{position: 'absolute', right: -5, top: -20}}
        />
        <Box position={'absolute'} top={-2} left={0} right={1} p={5}>
          <TouchableOpacity
            style={{alignSelf: 'flex-end', marginRight: 10, marginTop: 10}}
            onPress={() => navigation.navigate('EditProfile')}>
            <EditIcon />
          </TouchableOpacity>
        </Box>
      </Box>
      <Box
        height={153}
        width={288}
        left={60}
        top={55}
        bg={'white'}
        opacity={70}
        borderStyle={'dashed'}
        borderWidth={3}
        borderColor={theme.colors.primary[400]}>
        <Center position={'absolute'} alignSelf={'center'} mt={3}>
          <Animated.View style={{opacity, transform: [{translateY}]}}>
            <Box
              _text={{color: 'black', fontSize: 25, fontWeight: '800'}}
              left={-1}>
              {name}
            </Box>
          </Animated.View>
          <Animated.View style={{opacity, transform: [{translateY}]}}>
            <Box
              _text={{color: 'black', fontSize: 14, fontWeight: '500', pl: 1}}
              alignSelf={'center'}>
              {designation}
            </Box>
          </Animated.View>
          <Animated.View style={{opacity, transform: [{translateY}]}}>
            <Box
              bg={handleBg()}
              borderRadius={14}
              mt={2}
              mr={20}
              p={2}
              left={10}
              _text={{
                color: 'black',
                fontSize: 12,
                fontWeight: '500',
                textAlign: 'center',
              }}>
              {role}
            </Box>
          </Animated.View>
        </Center>
        <Image
          source={require('../../../assets/InnerCardDesignSmall.png')}
          left={240}
          alt="1"
        />
        <Image
          source={require('../../../assets/InnerCardDesign1.png')}
          left={-10}
          top={39}
          alt="2"
        />
      </Box>
      <Center top={150}>
        <ProfileStreakDesign width={width} style={{position: 'absolute'}} />
        <View>
          <Box
            left={-138}
            bottom={-14}
            _text={{color: 'black', fontSize: 25, fontWeight: '800'}}>
            8
          </Box>
          <Box
            _text={{color: 'black', fontSize: 40, fontWeight: '900'}}
            position={'absolute'}
            bottom={8}
            left={1}>
            7
          </Box>
          <Box
            _text={{fontSize: 18, color: 'black', fontWeight: '600'}}
            position={'absolute'}
            bottom={4}
            left={-15}>
            Streaks
          </Box>
          <Box
            left={144}
            bottom={5}
            _text={{color: 'black', fontSize: 25, fontWeight: '800'}}>
            10
          </Box>
        </View>
      </Center>
      <Box
        w={374}
        h={420}
        bg={'white'}
        ml={5}
        bottom={4}
        borderRadius={10}
        position={'absolute'}>
        <VStack mt={10} space={2}>
          <Options
            Component="Change Password"
            onPress={() => {
              navigation.navigate('ChangePassword');
            }}
          />
          <Options
            Component="Bookmarks"
            onPress={() => {
              navigation.navigate('Bookmarks');
            }}
          />
          <Options
            Component="Preferences"
            onPress={() => {
              navigation.navigate('Preferences');
            }}
          />
        </VStack>
        <Image
          source={require('../../../assets/profileBottomDesign.png')}
          right={0}
          bottom={0}
          position={'absolute'}
          alt="3"
        />
      </Box>
    </Box>
  );
};
