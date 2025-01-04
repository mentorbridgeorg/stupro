import {Box} from 'native-base';
import React, {useState} from 'react';
import {EmailIcon} from '../../assets/icons/EmailIcon';
import {Button} from '../../ui/atoms/Button';
import {FormInput} from '../../ui/molecules/FormInput';


export const ForgotPasswordForm = () => {
  const [ForgotPasswordData, setForgotPasswordData] = useState({
    email: '',
  
  });
  const [] = useState(false);
  return (
    <Box w="100%">
      <Box mb="6" mx="4">
        <Box>
          <FormInput

            label="Email"
            placeholder="example@gmail.com"
          
            onChange={text => {
                setForgotPasswordData({...ForgotPasswordData, email: text});
            }}
               
            icon={<EmailIcon />}
            
          />
        </Box>
       
      </Box>
      <Box alignItems="center" mb="5" mt="5">
        <Button onPress={() => {}} isDisabled={false}>
          Submit
        </Button>
      </Box>
    </Box>
  );
};
