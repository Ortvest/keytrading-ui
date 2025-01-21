import { SighUpButton } from '@modules/Modals/Login/features/SignUpButton';

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

type LoginWrapperProps = ComponentWrapperChildren & ModalProps;

export const LoginWrapper = ({ children, onCloseHandler }: LoginWrapperProps) => {
  const { type } = useTypedSelector((state) => state.modalReducer);
  return (
    <Modal isOpen={type === ModalType.LOGIN} onClose={onCloseHandler}>
      <ModalOverlay />
      <ModalContent top="25%">
        <ModalHeader>Log in to your account</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {children}
          <Flex direction="column" alignItems="flex-start" width="100%" paddingLeft="5px" gap="4px" marginTop="-45px">
            <Text fontSize="14px" color="gray.600">
              Don`t have an account?
            </Text>
            <SighUpButton />
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
