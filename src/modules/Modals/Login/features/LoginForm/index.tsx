import { useState } from 'react';

import { LoginSwitch } from '@modules/Modals/Login/features/LoginSwitch';

import { LoginType } from '@shared/enums/LoginTypes.enums';
import { UserCredentials } from '@shared/interfaces/UserCredentials.interfaces';

import { Button, Flex, Input, InputGroup, InputRightElement } from '@chakra-ui/react';

export const LoginForm = () => {
  const [userCredentials, setUserCredentials] = useState<UserCredentials>({ username: '', password: '' });
  const [loginType, setLoginType] = useState<LoginType>(LoginType.Email);

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

    if (loginType === LoginType.Email && !isEmailValid(username)) {
      alert('Please enter a valid email address!');
      return;
    }

    alert(`You signed in with ${loginType}: ${username}!`);
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
      <InputGroup width="100%">
        <Input
          type={loginType === LoginType.Email ? 'email' : 'text'}
          placeholder={loginType === LoginType.Email ? 'Email' : 'Username'}
          height="40px"
          borderRadius="8px"
          focusBorderColor="gray.300"
          value={userCredentials.username}
          onChange={onChangeHandler}
          name="username"
        />
        <InputRightElement>
          <LoginSwitch currentType={loginType} onSwitch={setLoginType} />
        </InputRightElement>
      </InputGroup>

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
