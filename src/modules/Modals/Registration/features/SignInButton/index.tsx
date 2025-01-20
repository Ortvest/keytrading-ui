import { ModalSlice } from '@global/store/slices/modal.slice';

import { ModalType } from '@shared/enums/Modal.enums';
import { useTypedDispatch } from '@shared/hooks/useTypedDispatch';

import { Text } from '@chakra-ui/react';

export const SighInButton = () => {
  const dispatch = useTypedDispatch();
  const { setModalType } = ModalSlice.actions;

  const onOpenSignInModalHandler = (): void => {
    dispatch(setModalType(ModalType.LOGIN));
  };

  return (
    <Text
      as="a"
      href="#"
      fontSize="14px"
      fontWeight="semibold"
      color="blue.600"
      _hover={{ textDecoration: 'underline' }}
      onClick={onOpenSignInModalHandler}>
      Sign in!
    </Text>
  );
};
