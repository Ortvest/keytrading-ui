import { ModalSlice } from '@global/store/slices/modal.slice';

import { ModalType } from '@shared/enums/Modal.enums';
import { useTypedDispatch } from '@shared/hooks/useTypedDispatch';

import { Button } from '@chakra-ui/react';

export const SighUpButton = () => {
  const dispatch = useTypedDispatch();
  const { setModalType } = ModalSlice.actions;

  const onOpenSignUpModalHandler = (): void => {
    dispatch(setModalType(ModalType.REGISTRATION));
  };

  return (
    <Button
      variant="link"
      fontSize="14px"
      fontWeight="semibold"
      color="blue.600"
      _hover={{ textDecoration: 'underline' }}
      onClick={onOpenSignUpModalHandler}>
      Sign up!
    </Button>
  );
};
