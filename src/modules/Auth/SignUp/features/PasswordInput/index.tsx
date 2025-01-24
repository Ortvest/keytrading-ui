interface PasswordInputProps {
  password: string;
  confirmPassword?: string;
  showPassword: boolean;
  showConfirmPasswordInput: boolean;
  onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onConfirmPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  toggleShowPassword: () => void;
}

import EyeOpen from '@shared/icons/eye-off.svg';
import EyeOff from '@shared/icons/eye-open.png';

import { FormControl, IconButton, Image, Input, InputGroup, InputRightElement } from '@chakra-ui/react';

export const PasswordInput = ({
  password,
  showConfirmPasswordInput,
  confirmPassword,
  showPassword,
  onPasswordChange,
  onConfirmPasswordChange,
  toggleShowPassword,
}: PasswordInputProps) => {
  return (
    <>
      <FormControl id="password" mb="16px">
        <InputGroup>
          <Input
            name="password"
            borderRadius="12px"
            placeholder="Password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={onPasswordChange}
            borderColor="rgba(19.31, 18.6, 55.24, 0.12)"
            focusBorderColor="#0500FF"
            p="16px"
            h="52px"
          />
          <InputRightElement height="52px">
            <IconButton
              variant="link"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              icon={<Image src={showPassword ? EyeOff : EyeOpen} alt="Toggle visibility" />}
              onClick={toggleShowPassword}
            />
          </InputRightElement>
        </InputGroup>
      </FormControl>
      {showConfirmPasswordInput && (
        <FormControl id="confirm-password" mb="16px" mt="16px">
          <InputGroup>
            <Input
              borderRadius="12px"
              placeholder="Confirm Password"
              type={showPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={onConfirmPasswordChange}
              borderColor="rgba(19.31, 18.6, 55.24, 0.12)"
              focusBorderColor="#0500FF"
              p="16px"
              h="52px"
            />
            <InputRightElement height="52px">
              <IconButton
                variant="link"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                icon={<Image src={showPassword ? EyeOff : EyeOpen} alt="Toggle visibility" />}
                onClick={toggleShowPassword}
              />
            </InputRightElement>
          </InputGroup>
        </FormControl>
      )}
    </>
  );
};
