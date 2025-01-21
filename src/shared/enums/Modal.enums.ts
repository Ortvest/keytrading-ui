export const enum ModalType {
  LOGIN = 'login',
  REGISTRATION = 'registration',
}

export interface ModalState {
  type: ModalType | null;
}

export interface ModalProps {
  onCloseHandler: () => void;
}
