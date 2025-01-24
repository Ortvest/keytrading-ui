import React, { useCallback, useEffect, useState } from 'react';

import { EmailInput } from '@modules/Auth/SignUp/features/EmailInput';
import { PasswordConditions } from '@modules/Auth/SignUp/features/PasswordConditions';
import { PasswordInput } from '@modules/Auth/SignUp/features/PasswordInput';

import { SignUpData } from '@shared/interfaces/User.interfaces';
import { isEmail } from '@shared/validations/validators/isEmail.validator';
import { hasDigit, hasSpecialChar } from '@shared/validations/validators/password.validators';

import { Button } from '@chakra-ui/react';

interface SignUpFormProps {
  showPasswordInput: boolean;
  setShowPasswordInput: (showPasswordInput: boolean) => void;
  shouldClearState: boolean;
}
export const SignUpForm = ({ showPasswordInput, setShowPasswordInput, shouldClearState }: SignUpFormProps) => {
  const [signUpData, setSignUpData] = useState<SignUpData>({} as SignUpData);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPasswordInput, setShowConfirmPasswordInput] = useState(false);
  const [validData, setValidData] = useState({
    isEmailValid: true,
  });
  const [passwordConditions, setPasswordConditions] = useState({
    minLength: false,
    hasDigit: false,
    hasSpecialChar: false,
  });

  const onChangeHandler = (key: keyof SignUpData, value: string) => {
    setSignUpData({ ...signUpData, [key]: value });
  };

  const onContinueHandler = useCallback(() => {
    if (signUpData?.email?.trim().length) {
      const isEmailValid = isEmail(signUpData?.email);
      if (isEmailValid) {
        setShowPasswordInput(true);
        setValidData({ isEmailValid: true });
      }
    }
    if (signUpData.password) {
      setShowConfirmPasswordInput(true);
    }
  }, [signUpData.email, signUpData.password]);

  useEffect(() => {
    setPasswordConditions({
      minLength: signUpData?.password?.length >= 8,
      hasDigit: hasDigit(signUpData?.password),
      hasSpecialChar: hasSpecialChar(signUpData?.password),
    });
  }, [signUpData.password, signUpData.confirmPassword]);

  useEffect(() => {
    if (shouldClearState) {
      setShowPasswordInput(false);
      setSignUpData({} as SignUpData);
      setPasswordConditions({
        minLength: false,
        hasDigit: false,
        hasSpecialChar: false,
      });
    }
  }, [shouldClearState]);
  return (
    <>
      <EmailInput
        email={signUpData.email}
        isEmailValid={true}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeHandler('email', e.currentTarget.value)}
      />
      {showPasswordInput && (
        <>
          <PasswordInput
            password={signUpData.password}
            confirmPassword={signUpData.confirmPassword}
            showConfirmPasswordInput={showConfirmPasswordInput}
            showPassword={showPassword}
            onPasswordChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onChangeHandler('password', e.currentTarget.value)
            }
            onConfirmPasswordChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onChangeHandler('confirmPassword', e.currentTarget.value)
            }
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
        onClick={onContinueHandler}
        isDisabled={!validData.isEmailValid}
        _disabled={{ cursor: 'not-allowed' }}>
        {showConfirmPasswordInput ? 'Sign Up' : 'Continue'}
      </Button>
    </>
  );
};
