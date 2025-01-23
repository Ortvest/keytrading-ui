import React from 'react';

import { PasswordInputProps } from '@shared/interfaces/PasswordInputProps.interfaces';

import {
  FormControl,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  useColorModeValue,
} from '@chakra-ui/react';

export const PasswordInput: React.FC<PasswordInputProps> = ({
  password,
  confirmPassword,
  showPassword,
  onPasswordChange,
  onConfirmPasswordChange,
  toggleShowPassword,
}) => {
  const inputBorder = useColorModeValue('gray.300', 'gray.600');

  return (
    <>
      <FormControl id="password" mb="16px">
        <InputGroup>
          <Input
            borderRadius="12px"
            placeholder="Password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={onPasswordChange}
            borderColor={inputBorder}
            focusBorderColor="blue.500"
            p="16px"
            h="52px"
          />
          <InputRightElement height="52px">
            <IconButton
              variant="link"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              icon={
                <Image
                  src={showPassword ? 'src/shared/icons/eye-off.svg' : 'src/shared/icons/eye-open.png'}
                  alt="Toggle visibility"
                />
              }
              onClick={toggleShowPassword}
            />
          </InputRightElement>
        </InputGroup>
      </FormControl>
      {confirmPassword !== undefined && onConfirmPasswordChange && (
        <FormControl id="confirm-password" mb="16px" mt="16px">
          <InputGroup>
            <Input
              borderRadius="12px"
              placeholder="Confirm Password"
              type={showPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={onConfirmPasswordChange}
              borderColor={inputBorder}
              focusBorderColor="blue.500"
              p="16px"
              h="52px"
            />
            <InputRightElement height="52px">
              <IconButton
                variant="link"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                icon={
                  <Image
                    src={showPassword ? 'src/shared/icons/eye-off.svg' : 'src/shared/icons/eye-open.png'}
                    alt="Toggle visibility"
                  />
                }
                onClick={toggleShowPassword}
              />
            </InputRightElement>
          </InputGroup>
        </FormControl>
      )}
    </>
  );
};
