import React from 'react';

import { FormControl, Input, InputGroup } from '@chakra-ui/react';

interface ConfirmPasswordInputProps {
  confirmPassword: string;
  onConfirmPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showPassword: boolean;
}

export const ConfirmPasswordInput: React.FC<ConfirmPasswordInputProps> = ({
  confirmPassword,
  onConfirmPasswordChange,
  showPassword,
}) => (
  <FormControl id="confirm-password" mb="16px">
    <InputGroup>
      <Input
        borderRadius="12px"
        placeholder="Confirm Password"
        type={showPassword ? 'text' : 'password'}
        value={confirmPassword}
        onChange={onConfirmPasswordChange}
        borderColor="gray.300"
        focusBorderColor="blue.500"
        p="16px"
        h="52px"
      />
    </InputGroup>
  </FormControl>
);
