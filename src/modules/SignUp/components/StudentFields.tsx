import {FormInput} from '@molecules/FormInput';
import {FormSelect} from '@molecules/FormSelect';
import {useAtom} from 'jotai';
import {Box, Stack} from 'native-base';
import React from 'react';
import {signUpDataAtom} from '../atoms';
import {degreeOptions} from './DegreeOptions';

export const StudentFields = () => {
  const [signUpData, setSignUpData] = useAtom(signUpDataAtom);

  return (
    <Box w="100%">
      <Stack mx="10" w="290" mb="5">
        <FormSelect
          label="Degree"
          isRequired
          options={degreeOptions}
          selectedValue={signUpData?.userDetails?.degree}
          onChange={itemValue =>
            setSignUpData({
              ...signUpData,
              userDetails: {...signUpData.userDetails, degree: itemValue},
            })
          }
          placeholder="Choose Degree"
        />
      </Stack>
      <Stack mx="10" w="290" mb="5">
        <FormInput
          label="College"
          isRequired
          placeholder="ABC College of Engineering"
          value={signUpData?.userDetails?.college}
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
