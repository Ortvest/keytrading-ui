import { Input } from '@chakra-ui/react';

interface AmountInputFieldProps {
  onAmountChange: () => void;
}

export const AmountInputField = ({ onAmountChange }: AmountInputFieldProps) => {
  return (
    <Input
      placeholder="Enter the amount you plan to invest"
      type="number"
      focusBorderColor="gray.300"
      onChange={onAmountChange}
    />
  );
};
