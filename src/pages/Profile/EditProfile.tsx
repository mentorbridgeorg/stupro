import {degreeOptions} from '@/modules/SignUp/components/DegreeOptions';
import {theme} from '@/theme';
import {Button} from '@atoms/Button';
import {FormInput} from '@molecules/FormInput';
import {FormSelect} from '@molecules/FormSelect';
import {useNavigation} from '@react-navigation/native';
import {Box, Center, Button as NativeBaseButton, Stack} from 'native-base';
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
    // eslint-disable-next-line react-native/no-inline-styles
    <SafeAreaView style={{flex: 1}}>
      <Box bg={theme.colors.primary[500]} pb={10} borderBottomRadius={30}>
        <Center
          mt={10}
          _text={{fontSize: 25, color: 'white', fontWeight: 'bold'}}>
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
            size={'sm'}
            _text={{
              fontSize: 'sm',
              fontWeight: 'bold',
            }}
            borderColor={theme.colors.light[200]}
            borderWidth={1}
            borderRadius={10}
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
