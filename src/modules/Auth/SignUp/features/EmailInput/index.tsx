import React from 'react';

interface EmailInputProps {
  email: string;
  isEmailValid: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

import { FormControl, FormErrorMessage, Input } from '@chakra-ui/react';

export const EmailInput: React.FC<EmailInputProps> = ({ email, isEmailValid, onChange }) => {
  return (
    <FormControl id="email" mb="24px" isInvalid={!isEmailValid}>
      <Input
        borderRadius="12px"
        placeholder="Email address"
        type="email"
        borderColor="rgba(19.31, 18.60, 55.24, 0.12)"
        focusBorderColor="#0500FF"
        p="16px"
        h="52px"
        value={email}
        onChange={onChange}
      />
      {!isEmailValid && <FormErrorMessage>Invalid email format</FormErrorMessage>}
    </FormControl>
  );
};
