import { useState } from 'react';

import { AuthedUserCard } from '@modules/Header/features/AuthedUserCard';

import { UserData } from '@shared/interfaces/user.interface';

import { Button } from '@chakra-ui/react';

export const GetStartedButton = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const user: UserData = {
    username: 'МaxDach',
    avatar: '',
  };

  const onLoginHandler = (): void => {
    setIsAuthenticated(true);
  };

  return isAuthenticated ? (
    <AuthedUserCard username={user.username} avatar={user.avatar} />
  ) : (
    <Button colorScheme="teal" variant="outline" onClick={onLoginHandler}>
      Get Started
    </Button>
  );
};
