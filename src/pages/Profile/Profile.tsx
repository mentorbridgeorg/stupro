import {Button} from '@atoms/Button';
import {RoleLabel} from '@atoms/RoleLabel/RoleLabel';
import {useNavigation} from '@react-navigation/native';
import {Box, Center} from 'native-base';
import React from 'react';
import Options from './components/Options';

export const Profile = () => {
  const navigation = useNavigation();
  const Position = [
    {value: 'Student', background: 'lightblue'},
    {value: 'Professional', background: 'lightgreen'},
  ];

  const role = 'Professional';

  const handleBg: () => any = () => {
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
              navigation.navigate('EditProfile' as never);
            }}>
            Edit Profile
          </Button>
        </Box>
      </Center>
      <Box
        pl={5}
        pt={5}
        _text={{color: 'black', fontWeight: 'medium', fontSize: 20}}>
        Settings
      </Box>
      <Box marginY={5}>
        <Options
          Component="Change Password"
          onPress={() => {
            navigation.navigate('ChangePassword');
          }}
        />
      </Box>
    </Box>
  );
};
