import { useState } from 'react';

import { UserCredentials } from '@shared/interfaces/UserCredentials.interfaces';

import { Button, Flex, Input } from '@chakra-ui/react';

export const LoginForm = () => {
  const [userCredentials, setUserCredentials] = useState<UserCredentials>({ username: '', password: '' });

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
    <Flex direction="column" justifyContent="center" alignItems="center" gap="16px">
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
    </Flex>
  );
};
