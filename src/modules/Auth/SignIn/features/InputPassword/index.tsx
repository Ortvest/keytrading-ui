import { useState } from 'react';

import eye from '@shared/icons/eye-off.svg';
import eyeoff from '@shared/icons/eye-open.png';

import { IconButton, Image, Input, InputGroup, InputProps, InputRightElement } from '@chakra-ui/react';

export const InputPassword = (props: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <InputGroup>
      <Input
        {...props}
        type={showPassword ? 'text' : 'password'}
        name="password-input"
        placeholder="Password"
        borderRadius="12px"
        boxShadow="sm"
        width="344px"
        height="52px"
        backgroundColor="rgba(19, 19, 55, 0.04)"
      />
      <InputRightElement
        width="40px"
        height="40px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        transform="translateY(5px)">
        <IconButton variant="link" aria-label="Toggle password visibility" onClick={togglePasswordVisibility}>
          <Image src={showPassword ? eyeoff : eye} boxSize="20px" alt="Password Visibility Icon" />
        </IconButton>
      </InputRightElement>
    </InputGroup>
  );
};
