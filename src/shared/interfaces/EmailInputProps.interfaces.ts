export interface EmailInputProps {
  email: string;
  isEmailValid: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
