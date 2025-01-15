import { LoginType } from '@shared/enums/LoginType.enum';

export interface LoginSwitchProps {
  currentType: LoginType;
  onSwitch: (type: LoginType) => void;
}
