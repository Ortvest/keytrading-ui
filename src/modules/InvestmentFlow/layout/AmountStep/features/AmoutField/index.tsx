import { Input } from '@chakra-ui/react';

interface AmountFieldProps {
  onAmountChangeHandler?: () => void;
  name?: string;
}

export const AmountField = ({ onAmountChangeHandler, name }: AmountFieldProps) => {
  return (
    <Input
      placeholder="Enter the amount you plan to invest"
      type="number"
      focusBorderColor="gray.300"
      onChange={onAmountChangeHandler}
      name={name}
    />
  );
};
