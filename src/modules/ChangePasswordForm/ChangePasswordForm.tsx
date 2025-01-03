import { Button } from '../../ui/atoms/Button';
import {EyeSlashIcon} from '../../assets/icons/EyeSlashIcon';
import {PasswordIcon} from '../../assets/icons/PasswordIcon';
import {FormInput} from '../../ui/molecules/FormInput';
import React from 'react';
import { Box } from 'native-base';
import { PasswordPattern } from '../SignUp/components/helpers/PasswordPattern';

export const ChangePasswordForm = () => {
  return (
   <><Box alignItems="center" mb="5" p="10" >
    
          <FormInput
              label="Current Password"
              placeholder="Current Password"
              onChange={() => { } }
              isRequired
              icon={<PasswordIcon />}
              rightIcon={<EyeSlashIcon />} />
              <Box mt="3">
          <FormInput
              label="New Password"
              placeholder="New Password"
              onChange={() => { } }
              isRequired
              icon={<PasswordIcon />}
              rightIcon={<EyeSlashIcon />} />
              <PasswordPattern/>
              </Box>
              <Box mt="3"> 
          <FormInput
              label="Confirm Password"
              placeholder="Confirm Password"
              onChange={() => { } }
              isRequired
              icon={<PasswordIcon />}
              rightIcon={<EyeSlashIcon />} />
              </Box>
      </Box>
      <Box alignItems="center" mb="5" mt="5" >
      <Button onPress={() => { } } isDisabled={false}>
              Submit
          </Button>
      </Box>
      </>
  );
};
