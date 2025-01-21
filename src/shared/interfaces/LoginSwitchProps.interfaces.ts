import { LoginTypes } from '@shared/enums/LoginTypes.enums';

export interface LoginSwitchProps {
  currentType: LoginTypes;
  onSwitch: (type: LoginTypes) => void;
}
