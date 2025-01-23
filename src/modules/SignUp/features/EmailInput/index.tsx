import React from 'react';

import { EmailInputProps } from '@shared/interfaces/EmailInputProps.interfaces';

import { FormControl, FormErrorMessage, Input, useColorModeValue } from '@chakra-ui/react';

export const EmailInput: React.FC<EmailInputProps> = ({ email, isEmailValid, onChange }) => {
  const inputBorder = useColorModeValue('gray.300', 'gray.600');

  return (
    <FormControl id="email" mb="24px" isInvalid={!isEmailValid}>
      <Input
        borderRadius="12px"
        placeholder="Email address"
        type="email"
        borderColor={inputBorder}
        focusBorderColor="blue.500"
        p="16px"
        h="52px"
        value={email}
        onChange={onChange}
      />
      {!isEmailValid && <FormErrorMessage>Invalid email format</FormErrorMessage>}
    </FormControl>
  );
};
