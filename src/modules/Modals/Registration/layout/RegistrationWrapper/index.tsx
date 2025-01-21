import { SighInButton } from '@modules/Modals/Registration/features/SignInButton';

import { ModalProps, ModalType } from '@shared/enums/Modal.enums';
import { useTypedSelector } from '@shared/hooks/useTypedSelector';
import { ComponentWrapperChildren } from '@shared/interfaces/ComponentWrapperChildren.interfaces';

import {
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';

type RegistrationWrapperProps = ComponentWrapperChildren & ModalProps;

export const RegistrationWrapper = ({ children, onCloseHandler }: RegistrationWrapperProps) => {
  const { type } = useTypedSelector((state) => state.modalReducer);
  return (
    <Modal isOpen={type === ModalType.REGISTRATION} onClose={onCloseHandler}>
      <ModalOverlay />
      <ModalContent top="25%">
        <ModalHeader>Create your account</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {children}
          <Flex direction="column" alignItems="flex-start" width="100%" paddingLeft="5px" gap="4px" marginTop="-45px">
            <Text fontSize="14px" color="gray.600">
              Have an account?
            </Text>
            <SighInButton />
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
