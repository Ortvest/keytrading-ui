import { RegistrationForm } from '@modules/Modals/Registration/features/RegistrationForm';
import { RegistrationWrapper } from '@modules/Modals/Registration/layout/RegistrationWrapper';

import { ModalProps } from '@shared/enums/Modal.enums';

export const RegistrationModal = ({ onCloseHandler }: ModalProps) => {
  return (
    <RegistrationWrapper onCloseHandler={onCloseHandler}>
      <RegistrationForm />
    </RegistrationWrapper>
  );
};
