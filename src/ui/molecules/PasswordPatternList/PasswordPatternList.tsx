import {CrossCircledIcon} from '@assets/icons/CrossCircledIcon';
import {Badge, Center, CheckIcon, Flex, HStack} from 'native-base';
import React from 'react';

export const PasswordPatternList = ({password}: {password: string}) => {
  const isPatternMatch = (pattern: RegExp) => {
    return pattern.test(password);
  };

  return (
    <Center mx="auto">
      <HStack flexWrap="wrap" justifyContent="center" space={2} mt="2">
        {[
          {pattern: /^.{8,}$/, text: '8 characters'},
          {pattern: /[A-Z]/, text: '1 uppercase letter', fontWeight: 'bold'},
          {pattern: /[a-z]/, text: '1 lowercase letter'},
          {pattern: /\d/, text: '1 number'},
          {pattern: /[!@#$%^&*]/, text: '1 special character (!@#$%^&*)'},
        ].map(({pattern, text, fontWeight}) => (
          <Badge
            key={text}
            colorScheme={isPatternMatch(pattern) ? 'success' : 'danger'}
            rounded="10"
            variant={'solid'}
            mb="2"
            fontWeight={fontWeight}>
            <Flex direction="row" alignItems="center" gap={1}>
              {isPatternMatch(pattern) ? (
                <CheckIcon />
              ) : (
                <CrossCircledIcon color="muted.50" />
              )}
              {text}
            </Flex>
          </Badge>
        ))}
      </HStack>
    </Center>
  );
};
