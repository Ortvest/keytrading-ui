export interface PasswordConditionsProps {
  conditions: {
    minLength: boolean;
    hasDigit: boolean;
    hasSpecialChar: boolean;
  };
}
