import { useState } from 'react';

import { AuthProposal } from '@modules/Auth/shared/AuthProposal';
import { AuthHeader } from '@modules/Auth/shared/Header';
import { ContinueButton } from '@modules/Auth/SignIn/features/ContinueButton';
import { GoBackLink } from '@modules/Auth/SignIn/features/GoBackLink';
import { GoogleButton } from '@modules/Auth/SignIn/features/GoogleButton';
import { InputEmail } from '@modules/Auth/SignIn/features/InputEmail';
import { InputPassword } from '@modules/Auth/SignIn/features/InputPassword';
import { OrSeparator } from '@modules/Auth/SignIn/features/OrSeparator';
import { RuleText } from '@modules/Auth/SignIn/features/RuleText';

import { Box, Flex } from '@chakra-ui/react';

export const SignInForm = () => {
  const [emailValid, setEmailValid] = useState(false);
  const [showPasswordInput, setShowPasswordInput] = useState(false);

  const handleEmailValidation = (isValid: boolean) => {
    setEmailValid(isValid);
  };

  const onHandleContinueClick = () => {
    if (emailValid) {
      setShowPasswordInput(true);
    }
  };

  const onHandleGoBackClick = () => {
    setShowPasswordInput(false);
  };

  const handleContinueLogic = () => {
    console.log('Continue button clicked!');
  };

  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="center">
      <Box mt={-56}>
        <AuthHeader title={'Welcome'} />
      </Box>

      {!showPasswordInput && (
        <Box mt={6}>
          <InputEmail onValidateEmail={handleEmailValidation} />
        </Box>
      )}

      {showPasswordInput && (
        <Box mt={6}>
          <InputEmail onValidateEmail={handleEmailValidation} />
        </Box>
      )}

      {!showPasswordInput && (
        <Box mt={6}>
          <ContinueButton onClick={onHandleContinueClick} />
        </Box>
      )}

      {showPasswordInput && (
        <Box mt={6}>
          <InputPassword />
        </Box>
      )}

      <Box mt={6}>
        <AuthProposal type={showPasswordInput ? 'showPasswordInput' : 'signin'} />
      </Box>

      {showPasswordInput && (
        <>
          <Box mt={3}>
            <ContinueButton onClick={handleContinueLogic} />
          </Box>

          <Box mt={4}>
            <GoBackLink onClick={onHandleGoBackClick} />
          </Box>
        </>
      )}

      {!showPasswordInput && (
        <>
          <Box mt={-5}>
            <OrSeparator />
          </Box>

          <Box mt={6}>
            <GoogleButton />
          </Box>
        </>
      )}

      <Box width="100%" position="absolute" bottom="32px" left="50%" transform="translateX(-50%)">
        <RuleText />
      </Box>
    </Flex>
  );
};
