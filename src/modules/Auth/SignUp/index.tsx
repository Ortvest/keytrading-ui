import { useState } from 'react';

import { AuthProposal } from '@modules/Auth/shared/AuthProposal';
import { AuthHeader } from '@modules/Auth/shared/Header';
import { SignUpForm } from '@modules/Auth/SignUp/features/Form';
import { SocialAuth } from '@modules/Auth/SignUp/features/SocialAuth';

import { Box, Flex, Link, Text } from '@chakra-ui/react';

export const SignUp = () => {
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [shouldClearState, setShouldClearState] = useState(false);
  return (
    <Flex height="100vh" direction="column" justify="space-between">
      <Box w="344px" maxW="md" paddingTop="56px" borderRadius="lg" mx="auto" flex="1">
        <AuthHeader title={'Create an account'} />
        <SignUpForm
          showPasswordInput={showPasswordInput}
          setShowPasswordInput={setShowPasswordInput}
          shouldClearState={shouldClearState}
        />
        {!showPasswordInput && <AuthProposal type={'signin'} />}
        {showPasswordInput && (
          <Text textAlign="center" mt="16px">
            <Link color="#0500ff" fontWeight="600" onClick={() => setShouldClearState(true)}>
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
