import { Fragment } from 'react';

import { ModalSlice } from '@global/store/slices/modal.slice';

import { LoginModal } from '@modules/Modals/Login';
import { RegistrationModal } from '@modules/Modals/Registration';

import { useTypedDispatch } from '@shared/hooks/useTypedDispatch';

export const Modals = () => {
  const dispatch = useTypedDispatch();
  const { setModalType } = ModalSlice.actions;

  const onCloseHanlder = () => {
    dispatch(setModalType(null));
  };
  return (
    <Fragment>
      <LoginModal onCloseHandler={onCloseHanlder} />
      <RegistrationModal onCloseHandler={onCloseHanlder} />
    </Fragment>
  );
};
