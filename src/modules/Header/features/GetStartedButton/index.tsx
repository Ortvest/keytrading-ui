import { useNavigate } from 'react-router-dom';

import { AppRoutes } from '@global/routes/AppRoutes';

import { AuthedUserCard } from '@modules/Header/layout/AuthedUserCard';

import { useTypedSelector } from '@shared/hooks/useTypedSelector';

import { Button } from '@chakra-ui/react';

export const GetStartedButton = () => {
  const navigate = useNavigate();
  const { username, avatar, isAuth } = useTypedSelector((state) => state.userReducer);

  const onSignUpHandler = (): void => {
    navigate(AppRoutes.signUp);
  };

  return isAuth ? (
    <AuthedUserCard username={username} avatar={avatar} />
  ) : (
    <Button colorScheme="teal" variant="outline" onClick={onSignUpHandler}>
      Get Started
    </Button>
  );
};
