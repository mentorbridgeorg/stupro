import React from 'react';
import {Box, Center, Pressable, Text} from 'native-base';
import {Button} from '../../ui/atoms/Button';
import {
  background,
  color,
} from 'native-base/lib/typescript/theme/styled-system';
import Options from './components/Options';
import EditProfile from './EditProfile';
import {RoleLabel} from '../../ui/atoms/RoleLabel/RoleLabel';
import {useNavigation} from '@react-navigation/native';

export const Profile = () => {
  const navigation = useNavigation();
  const Position = [
    {value: 'Student', background: 'lightblue'},
    {value: 'Professional', background: 'lightgreen'},
  ];

  const role = 'Professional';

  const handleBg: () => any = () => {
    // console.log(
    //   Position.find(findValue => findValue.value === role)?.background,
    // );
    return Position.find(findValue => findValue.value === role)?.background;
  };

  return (
    <Box>
      <Center>
        <Box
          mt={20}
          mb={2}
          _text={{fontSize: '3xl', color: 'amber.900', fontWeight: 'semibold'}}>
          Name
        </Box>
        <RoleLabel Component={role} bg={handleBg()} />
        <Box mt={3} _text={{fontSize: '2xl', color: 'amber.900'}}>
          Role
        </Box>
        <Box marginY={1} pt={2}>
          <Button
            onPress={() => {
              navigation.navigate('EditProfile');
            }}>
            Edit Profile
          </Button>
        </Box>
      </Center>
      <Box marginY={5}>
        <Options Component="Settings" />
      </Box>
    </Box>
  );
};
