import { Input } from '@chakra-ui/react';

interface InputEmailProps {
  onValidateEmail: (isValid: boolean) => void;
}

export const InputEmail = ({ onValidateEmail }: InputEmailProps) => {
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const onHandleEmailChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const email = event.target.value;
    const isValid = validateEmail(email);
    onValidateEmail(isValid);
  };

  return (
    <Input
      width="344px"
      height="52px"
      placeholder="Email address"
      borderRadius="12px"
      boxShadow="sm"
      name="email"
      backgroundColor="rgba(19, 19, 55, 0.04)"
      _hover={{ boxShadow: 'md' }}
      _focus={{ boxShadow: 'outline' }}
      onChange={onHandleEmailChange}
    />
  );
};
