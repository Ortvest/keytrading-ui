import React, { useState } from 'react';

import { EmailInput } from '@modules/SignUp/features/EmailInput';
import { PasswordConditions } from '@modules/SignUp/features/PasswordConditions';
import { PasswordInput } from '@modules/SignUp/features/PasswordInput';
import { SocialAuth } from '@modules/SignUp/features/SocialAuth';

import Logo from '@shared/icons/Logo.png';

import { Box, Button, Center, Flex, Image, Link, Text } from '@chakra-ui/react';
import * as Yup from 'yup';

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

  const passwordSchema = Yup.object().shape({
    password: Yup.string().min(8, 'Password must be at least 8 characters long').required('Password is required'),
    confirmPassword: Yup.string()
      .nullable()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm password is required'),
  });

  const handleContinue = async () => {
    if (!showPasswordInput) {
      setShowPasswordInput(true);
    } else if (!showConfirmPasswordInput) {
      setShowConfirmPasswordInput(true);
    } else {
      try {
        await passwordSchema.validate({ password, confirmPassword });
        alert('Registration successful!');
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          alert(error.message);
        }
      }
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
          <Image src={Logo} boxSize="40px" alt="Logo" />
        </Center>
        <Text fontSize="32px" fontWeight="600" textAlign="center" mb="24px" color="131337">
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
          <Text fontSize="16px" color="#131337A3" fontWeight="500" textAlign="center" mb="24px">
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
      <Flex
        mx="auto"
        fontWeight="600"
        w="344px"
        gap="64px"
        justify="center"
        fontSize="16px"
        color="131337"
        px="16px"
        py="24px">
        <Link>Privacy policy</Link>
        <Link>Terms of use</Link>
      </Flex>
    </Flex>
  );
};
