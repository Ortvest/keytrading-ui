import { ModalSlice } from '@global/store/slices/modal.slice';

import { AuthedUserCard } from '@modules/Header/layout/AuthedUserCard';

import { ModalType } from '@shared/enums/Modal.enums';
import { useTypedDispatch } from '@shared/hooks/useTypedDispatch';
import { useTypedSelector } from '@shared/hooks/useTypedSelector';

import { Button } from '@chakra-ui/react';

export const GetStartedButton = () => {
  const dispatch = useTypedDispatch();
  const { setModalType } = ModalSlice.actions;
  const { username, avatar, isAuth } = useTypedSelector((state) => state.userReducer);

  const onLoginHandler = (): void => {
    dispatch(setModalType(ModalType.LOGIN));
  };

  return isAuth ? (
    <AuthedUserCard username={username} avatar={avatar} />
  ) : (
    <Button colorScheme="teal" variant="outline" onClick={onLoginHandler}>
      Get Started
    </Button>
  );
};
