import {useAtom} from 'jotai';
import {Box, Stack} from 'native-base';
import React from 'react';
import {FormInput} from '../../../ui/molecules/FormInput/FormInput';
import {FormSelect} from '../../../ui/molecules/FormSelect/FormSelect';
import {signUpDataAtom} from '../atoms';

export const StudentFields = () => {
  const [signUpData, setSignUpData] = useAtom(signUpDataAtom);

  const degreeOptions = [
    {label: 'Bachelor of Engineering', value: 'BE'},
    {label: 'Bachelor of Technology', value: 'BTech'},
    {label: 'Bachelor of Science', value: 'BSc'},
    {label: 'Bachelor of Arts', value: 'BA'},
    {label: 'Master of Engineering', value: 'ME'},
    {label: 'Master of Technology', value: 'MTech'},
    {label: 'Master of Science', value: 'MS'},
    {label: 'Master of Arts', value: 'MA'},
    {label: 'Doctor of Philosophy', value: 'PhD'},
  ];

  return (
    <Box w="100%">
      <Stack mx="10" w="80%" mb="5">
        <FormSelect
          label="Degree"
          isRequired
          options={degreeOptions}
          onChange={itemValue =>
            setSignUpData({
              ...signUpData,
              userDetails: {...signUpData.userDetails, degree: itemValue},
            })
          }
          placeholder="Choose Degree"
        />
      </Stack>
      <Stack mx="10" w="80%" mb="5">
        <FormInput
          label="College"
          isRequired
          placeholder="ABC College of Engineering"
          onChange={text =>
            setSignUpData({
              ...signUpData,
              userDetails: {...signUpData.userDetails, college: text},
            })
          }
        />
      </Stack>
    </Box>
  );
};
