export interface LoginSwitchProps {
  currentType: 'email' | 'username';
  onSwitch: (type: 'email' | 'username') => void;
}
