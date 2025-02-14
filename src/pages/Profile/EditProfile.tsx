import {degreeOptions} from '@/modules/SignUp/components/DegreeOptions';
import {theme} from '@/theme';
import {FormSelect} from '@/ui/molecules/FormSelect';
import {Button} from '@atoms/Button';
import {FormInput} from '@molecules/FormInput';
import {useNavigation} from '@react-navigation/native';
import {Box, Center, Stack, Button as NativeBaseButton} from 'native-base';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';

const EditProfile = () => {
  const navigation = useNavigation();

  const [role, setRole] = useState('');
  const [degree, setDegree] = useState('');

  const roles = [
    {label: 'student', value: 'stu'},
    {label: 'Professional', value: 'pro'},
  ];

  return (
    <SafeAreaView style={{flex: 1}}>
      <Box bg={theme.colors.primary[500]} pb={10} borderBottomRadius={30}>
        <Center
          mt={10}
          _text={{fontSize: 25, color: 'black', fontWeight: 'bold'}}>
          Edit Profile
        </Center>
      </Box>
      <Box mt={10} marginX={10}>
        <Stack space={6} w="100%" alignItems="center">
          <FormInput placeholder="" onChange={() => {}} label="First Name" />
          <FormInput placeholder="" onChange={() => {}} label="Last Name" />
          <FormSelect
            label="UserType"
            isRequired
            options={roles}
            selectedValue={role}
            onChange={itemValue => setRole(itemValue)}
            placeholder="Choose Role"
          />
          {role === 'stu' ? (
            <>
              <FormSelect
                label="Degree"
                isRequired
                options={degreeOptions}
                selectedValue={degree}
                onChange={itemValue => setDegree(itemValue)}
                placeholder="Choose Degree"
              />
              <FormInput placeholder="" onChange={() => {}} label="College" />
            </>
          ) : null}
          {role === 'pro' ? (
            <>
              <FormInput placeholder="" onChange={() => {}} label="Company" />
              <FormInput
                placeholder=""
                onChange={() => {}}
                label="Designation"
              />
            </>
          ) : null}
        </Stack>
      </Box>
      <Box mt={20}>
        <Center flexDirection={'row'} justifyContent={'space-around'}>
          <NativeBaseButton
            variant={'outline'}
            _text={{
              fontSize: 'md',
              fontWeight: 'bold',
            }}
            style={{
              borderColor: theme.colors.primary[100],
              borderWidth: 3,
              borderRadius: 10,
            }}
            onPress={() => {
              navigation.goBack();
            }}>
            Cancel
          </NativeBaseButton>
          <Button
            onPress={() => {
              console.log('Save');
              navigation.goBack();
            }}>
            Save
          </Button>
        </Center>
      </Box>
    </SafeAreaView>
  );
};
export default EditProfile;
