import { LoginType } from '@shared/enums/LoginTypes.enums';

export interface LoginSwitchProps {
  currentType: LoginType;
  onSwitch: (type: LoginType) => void;
}
