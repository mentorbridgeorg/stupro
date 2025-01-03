import {Button} from '../../ui/atoms/Button';
import React from 'react';
import {Box} from 'native-base';
import {PasswordPattern} from '../SignUp/components/helpers/PasswordPattern';

import {PasswordField} from './components';
import { useAtom } from 'jotai';
import { PasswordFormAtom } from './atoms/PasswordForm';
import { SucessPage } from '../../pages/ChangePassword';
// import { signUpDataAtom } from '../SignUp/atoms';

export const ChangePasswordForm = () => {
     const [PasswordData,SetPassword] = useAtom(PasswordFormAtom);
    //  const singupData = useAtomValue(signUpDataAtom);
     let isValidPassword;
    
    // if( PasswordData?.password === singupData.userDetails?.password){
     isValidPassword = (PasswordData?.newPassword?.length >= 8 &&
     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).*$/.test(
         PasswordData.newPassword,
     )) && (PasswordData?.newPassword === PasswordData?.confirmPassword);
    // }
    // const handleSubmit = () =>{
       
    // };

    
  
  return (
    <>
      <Box alignItems="center" mb="5" p="10">
        <PasswordField
          placeholder="Current Password"
          label="Current Password"
          value= {PasswordData?.password}
          onChange={value => SetPassword({...PasswordData,password:value})}
        />
        <PasswordField placeholder="New Password" label="New Password" value= {PasswordData?.newPassword}
          onChange={value => SetPassword({...PasswordData,newPassword:value})}/>
        <Box mt="2">
          <PasswordPattern />
        </Box>
        <PasswordField
          placeholder="Confirm Password"
          label="Confirm Password"
          value= {PasswordData?.confirmPassword}
          onChange={value => SetPassword({...PasswordData,confirmPassword:value})}
        />
      </Box>
      <Box alignItems="center" mb="5" mt="5">
        <Button onPress={()=>SucessPage()} isDisabled={!isValidPassword}>
          Submit
        </Button>
      </Box>
    </>
  );
};
