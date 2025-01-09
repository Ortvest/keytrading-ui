import { useState } from 'react';

import { Box, Button, Flex, Input, Text } from '@chakra-ui/react';

export const LoginModal = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const isEmailValid = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSignIn = () => {
    if (!username || !password) {
      alert('Both fields are required!');
    } else if (isEmailValid(username)) {
      alert('You signed with username!');
    } else {
      alert('You signed in!');
    }
  };

  return (
    <Flex justifyContent="center" alignItems="center" minHeight="100vh" background="rgba(0, 0, 0, 0.6)">
      <Box background="white" width="400px" padding="30px" borderRadius="12px" boxShadow="2xl">
        <Flex direction="column" justifyContent="center" alignItems="center" gap="16px">
          <Text fontSize="24px" fontWeight="bold" fontFamily="Inter, sans-serif">
            Sign In
          </Text>

          <Input
            placeholder="Username or Email"
            width="100%"
            height="40px"
            borderRadius="8px"
            focusBorderColor="gray.300"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <Input
            placeholder="Password"
            type="password"
            width="100%"
            height="40px"
            borderRadius="8px"
            focusBorderColor="gray.300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            colorScheme="gray"
            width="114px"
            height="38px"
            borderRadius="6px"
            marginLeft="auto"
            onClick={handleSignIn}>
            Sign In &rarr;
          </Button>

          <Flex direction="column" alignItems="flex-start" width="100%" paddingLeft="5px" gap="4px" marginTop="-60px">
            <Text fontSize="14px" color="gray.600">
              Don&apos;t have an account?
            </Text>
            <Text
              as="a"
              href="#"
              fontSize="14px"
              fontWeight="semibold"
              color="blue.600"
              _hover={{ textDecoration: 'underline' }}>
              Sign up!
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};
