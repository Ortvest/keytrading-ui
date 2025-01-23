import React, { useState } from 'react';

import { EmailInput } from '@modules/SignUp/features/EmailInput';
import { PasswordConditions } from '@modules/SignUp/features/PasswordConditions';
import { PasswordInput } from '@modules/SignUp/features/PasswordInput';
import { SocialAuth } from '@modules/SignUp/features/SocialAuth';

import { Box, Button, Center, Flex, Image, Link, Text } from '@chakra-ui/react';

export const SignUp = () => {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [showConfirmPasswordInput, setShowConfirmPasswordInput] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordConditions, setPasswordConditions] = useState({
    minLength: false,
    hasDigit: false,
    hasSpecialChar: false,
  });

  const handleContinue = () => {
    if (!showPasswordInput) {
      setShowPasswordInput(true);
    } else if (!showConfirmPasswordInput) {
      setShowConfirmPasswordInput(true);
    } else if (password === confirmPassword) {
      alert('Registration successful!');
    } else {
      alert('Passwords do not match!');
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordConditions({
      minLength: newPassword.length >= 8,
      hasDigit: /\d/.test(newPassword),
      hasSpecialChar: /[@!?%]/.test(newPassword),
    });
  };

  return (
    <Flex height="100vh" direction="column" justify="space-between">
      <Box w="344px" maxW="md" paddingTop="56px" borderRadius="lg" mx="auto" flex="1">
        <Center marginBottom="96px">
          <Image src="src/shared/icons/Logo.png" boxSize="40px" alt="Logo" />
        </Center>
        <Text fontSize="xl" fontWeight="bold" textAlign="center" mb="24px">
          Create an account
        </Text>
        <EmailInput email={email} isEmailValid={isEmailValid} onChange={handleEmailChange} />
        {showPasswordInput && (
          <>
            <PasswordInput
              password={password}
              confirmPassword={showConfirmPasswordInput ? confirmPassword : undefined}
              showPassword={showPassword}
              onPasswordChange={handlePasswordChange}
              onConfirmPasswordChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
              toggleShowPassword={() => setShowPassword(!showPassword)}
            />
            <PasswordConditions conditions={passwordConditions} />
          </>
        )}
        <Button
          borderRadius="12px"
          w="full"
          backgroundColor="#0500ff"
          color="white"
          mb="16px"
          size="lg"
          onClick={handleContinue}
          isDisabled={!email || !isEmailValid || (showPasswordInput && !passwordConditions.minLength)}
          _disabled={{ cursor: 'not-allowed' }}>
          {showConfirmPasswordInput ? 'Sign Up' : 'Continue'}
        </Button>
        {!showPasswordInput && (
          <Text fontSize="sm" fontStyle="16px" color="gray.500" fontWeight="500" textAlign="center" mb="24px">
            Already have an account?{' '}
            <Link color="#0500ff" fontWeight="600">
              Sign In
            </Link>
          </Text>
        )}
        {showPasswordInput && (
          <Text textAlign="center" mt="16px">
            <Link
              color="#0500ff"
              fontWeight="600"
              onClick={() => {
                setShowPasswordInput(false);
                setPassword('');
                setConfirmPassword('');
                setPasswordConditions({
                  minLength: false,
                  hasDigit: false,
                  hasSpecialChar: false,
                });
              }}>
              Go Back
            </Link>
          </Text>
        )}
        {!showPasswordInput && <SocialAuth />}
      </Box>
      <Flex mx="auto" w="344px" gap="64px" justify="center" fontSize="sm" color="gray.500" px="16px" py="24px">
        <Link>Privacy policy</Link>
        <Link>Terms of use</Link>
      </Flex>
    </Flex>
  );
};
