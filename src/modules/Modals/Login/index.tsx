import { useState } from 'react';

import { Box, Button, Flex, Input, Text } from '@chakra-ui/react';

export const LoginModal = () => {
  const [userCredentials, setUserCredentials] = useState({ username: '', password: '' });

  const isEmailValid = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const onSignInHandler = (): void => {
    const { username, password } = userCredentials;

    if (!username || !password) {
      alert('Both fields are required!');
      return;
    }

    if (isEmailValid(username)) {
      alert('You signed in with email!');
      return;
    }

    alert('You signed in with username!');
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setUserCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Flex justifyContent="center" alignItems="center" minHeight="100vh" background="rgba(0, 0, 0, 0.6)">
      <Box background="white" width="400px" padding="30px" borderRadius="12px" boxShadow="2xl">
        <Flex direction="column" justifyContent="center" alignItems="center" gap="16px">
          <Text fontSize="24px" fontWeight="bold" fontFamily="Inter, sans-serif">
            Sign In
          </Text>

          <Input
            type="text"
            placeholder="Username or Email"
            width="100%"
            height="40px"
            borderRadius="8px"
            focusBorderColor="gray.300"
            value={userCredentials.username}
            onChange={onChangeHandler}
            name="username"
          />

          <Input
            type="password"
            placeholder="Password"
            width="100%"
            height="40px"
            borderRadius="8px"
            focusBorderColor="gray.300"
            value={userCredentials.password}
            onChange={onChangeHandler}
            name="password"
          />

          <Button
            colorScheme="gray"
            width="114px"
            height="38px"
            borderRadius="6px"
            marginLeft="auto"
            onClick={onSignInHandler}>
            Sign In
          </Button>

          <Flex direction="column" alignItems="flex-start" width="100%" paddingLeft="5px" gap="4px" marginTop="-60px">
            <Text fontSize="14px" color="gray.600">
              {"Don't have an account?"}
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
