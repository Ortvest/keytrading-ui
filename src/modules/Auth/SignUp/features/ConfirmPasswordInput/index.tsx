import React, { useState } from 'react';

import { FormControl, Input, InputGroup } from '@chakra-ui/react';

export const ConfirmPasswordInput: React.FC<{ showPassword: boolean }> = ({ showPassword }) => {
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <FormControl id="confirm-password" mb="16px">
      <InputGroup>
        <Input
          borderRadius="12px"
          placeholder="Confirm Password"
          type={showPassword ? 'text' : 'password'}
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          borderColor="gray.300"
          focusBorderColor="blue.500"
          p="16px"
          h="52px"
        />
      </InputGroup>
    </FormControl>
  );
};
