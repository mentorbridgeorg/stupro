import {FormInput} from '../../../ui/molecules/FormInput';
import {useAtom} from 'jotai';
import {Box, Stack} from 'native-base';
import React from 'react';
import {signUpDataAtom} from '../atoms';

export const ProfessionalFields = () => {
  const [signUpData, setSignUpData] = useAtom(signUpDataAtom);

  return (
    <Box w="100%">
      <Stack mx="10" w="80">
        <FormInput
          label="Designation"
          placeholder="Designation"
          value={signUpData?.userDetails?.designation}
          onChange={text =>
            setSignUpData({
              ...signUpData,
              userDetails: {...signUpData.userDetails, designation: text},
            })
          }
        />
      </Stack>
      <Stack mx="10" w="80" mt="3">
        <FormInput
          label="Company"
          placeholder="Company"
          value={signUpData?.userDetails?.company}
          onChange={text =>
            setSignUpData({
              ...signUpData,
              userDetails: {...signUpData.userDetails, company: text},
            })
          }
        />
      </Stack>
    </Box>
  );
};
