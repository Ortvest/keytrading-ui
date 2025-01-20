import { LoginForm } from '@modules/Modals/Login/features/LoginForm';
import { LoginWrapper } from '@modules/Modals/Login/layout/LoginWrapper';

import { ModalProps } from '@shared/enums/Modal.enums';

export const LoginModal = ({ onCloseHandler }: ModalProps) => {
  return (
    <LoginWrapper onCloseHandler={onCloseHandler}>
      <LoginForm />
    </LoginWrapper>
  );
};
