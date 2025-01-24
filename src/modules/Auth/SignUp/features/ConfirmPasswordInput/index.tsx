import React, { useState } from 'react';

import { FormControl, Input, InputGroup } from '@chakra-ui/react';

interface ConfirmPasswordProps {
  showPassword: boolean;
}

export const ConfirmPasswordInput = ({ showPassword }: ConfirmPasswordProps) => {
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <FormControl id="confirm-password" mb="16px">
      <InputGroup>
        <Input
          name="confirm-password"
          borderRadius="12px"
          placeholder="Confirm Password"
          type={showPassword ? 'text' : 'password'}
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          borderColor="rgba(19.31, 18.6, 55.24, 0.12)"
          focusBorderColor="#0500FF"
          p="16px"
          h="52px"
        />
      </InputGroup>
    </FormControl>
  );
};
