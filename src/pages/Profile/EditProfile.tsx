import {Button} from '@atoms/Button';
import {FormInput} from '@molecules/FormInput';
import {useNavigation} from '@react-navigation/native';
import {Box, Center, Select, Stack} from 'native-base';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';

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

  const handleChange = (itemValue: string) => {
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
          <FormInput placeholder="First Name" onChange={() => {}} />
          <FormInput placeholder="Last Name" onChange={() => {}} />
          <Select
            selectedValue={renderValue()}
            minWidth={'80%'}
            placeholder={'Choose options'}
            onValueChange={handleChange}
            borderRadius={10}
            p={3}>
            {roles.map((option: any) => (
              <Select.Item
                key={option.value}
                label={option.label}
                value={option.value}
              />
            ))}
          </Select>
          <FormInput placeholder="Designation" onChange={() => {}} />
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
