import { Input } from '@chakra-ui/react';

interface SharedInputProps {
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SharedInput = ({ type, placeholder, value, onChange, name }: SharedInputProps) => {
  return (
    <Input
      type={type}
      placeholder={placeholder}
      width="100%"
      height="40px"
      borderRadius="8px"
      focusBorderColor="gray.300"
      value={value}
      onChange={onChange}
      name={name}
    />
  );
};
