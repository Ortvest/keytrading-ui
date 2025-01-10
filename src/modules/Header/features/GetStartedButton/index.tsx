import { useState } from 'react';

import { AuthedUserCard } from '@modules/Header/features/AuthedUserCard';

import { Button } from '@chakra-ui/react';

export const GetStartedButton = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const username = 'МaxDach';
  const avatar = '';

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  if (isAuthenticated) {
    return <AuthedUserCard username={username} avatar={avatar} />;
  }

  return (
    <Button colorScheme="teal" variant="outline" onClick={handleLogin}>
      Get Started
    </Button>
  );
};
