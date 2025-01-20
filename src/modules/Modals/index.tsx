import { Fragment } from 'react';

import { ModalSlice } from '@global/store/slices/modal.slice';

import { LoginModal } from '@modules/Modals/Login';
import { RegistrationModal } from '@modules/Modals/Registration';

import { ModalType } from '@shared/enums/Modal.enums';
import { useTypedDispatch } from '@shared/hooks/useTypedDispatch';
import { useTypedSelector } from '@shared/hooks/useTypedSelector';

export const Modals = () => {
  const { type } = useTypedSelector((state) => state.modalReducer);
  const dispatch = useTypedDispatch();
  const { setModalType } = ModalSlice.actions;

  const onCloseHanlder = () => {
    dispatch(setModalType(null));
  };
  return (
    <Fragment>
      {type === ModalType.LOGIN ? <LoginModal onCloseHandler={onCloseHanlder} /> : null}
      {type === ModalType.REGISTRATION ? <RegistrationModal onCloseHandler={onCloseHanlder} /> : null}
    </Fragment>
  );
};
