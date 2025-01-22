import React, {useState} from 'react';
import {Box, Center, Spacer, Stack} from 'native-base';
import {SafeAreaView, Text} from 'react-native';
import InputText from '../../ui/atoms/InputText/InputText';
import Dropdown from '../../ui/atoms/Dropdown/Dropdown';
import {Button} from '../../ui/atoms/Button';
import {useNavigation} from '@react-navigation/native';

const EditProfile = () => {
  const navigation = useNavigation();

  const [role, setRole] = useState('stu');

  const roles = [
    {label: 'student', value: 'stu'},
    {label: 'Professtional', value: 'pro'},
  ];

  const renderValue = () => {
    return roles.find(roleOption => roleOption.value === role)?.label ?? '';
  };

  const handleChange = itemValue => {
    setRole(itemValue);
  };

  return (
    <SafeAreaView>
      <Box>
        <Center
          pt={5}
          _text={{fontSize: 25, color: 'black', fontWeight: 'bold'}}>
          Edit Profile
        </Center>
      </Box>
      <Box mt={10}>
        <Stack space={4} w="100%" alignItems="center">
          <InputText placeholder="First Name" />
          <InputText placeholder="Last Name" />
          <Dropdown
            options={roles}
            selectedValue={renderValue()}
            placeholder="Choose options"
            onValueChange={handleChange}
          />
          <InputText placeholder="Designation" />
        </Stack>
        <Center mt={5} flexDirection={'row'} justifyContent={'space-around'}>
          <Button
            onPress={() => {
              navigation.goBack();
            }}>
            Cancel
          </Button>
          <Button onPress={() => {}}>Save</Button>
        </Center>
      </Box>
    </SafeAreaView>
  );
};
export default EditProfile;
