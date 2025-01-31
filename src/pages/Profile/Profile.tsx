import {useNavigation} from '@react-navigation/native';
import {Box,VStack} from 'native-base';
import React from 'react';
import Options from './components/Options';
import {Image,TouchableOpacity} from 'react-native';
import {EditIcon} from '../../assets/icons/EditIcon';

export const Profile = () => {
  const navigation = useNavigation();
  const Position = [
    {value: 'Student', background: 'yellow.300'},
    {value: 'Professional', background: 'orange.300'},
  ];

  const name = 'Bala Krishnan';
  const designation = 'React Native Developer';
  const role = 'Student';

  const handleBg: () => any = () => {
    return Position.find(findValue => findValue.value === role)?.background;
  };

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
        <Box _text={{color: 'black', fontSize: 50, fontWeight: '700'}}>
          {name}
        </Box>
        <Box _text={{color: 'black', fontSize: 20, fontWeight: '400'}}>
          {designation}
        </Box>
        <Box
          bg={handleBg()}
          borderRadius={10}
          mt={2}
          maxWidth={20}
          p={2}
          _text={{
            color: 'black',
            fontSize: 15,
            fontWeight: '500',
            textAlign: 'center',
          }}>
          {role}
        </Box>
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
