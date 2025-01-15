import { Select } from '@chakra-ui/react';

interface CurrencySelectProps {
  onCurrencyChange: () => void;
}

export const CurrencySelect = ({ onCurrencyChange }: CurrencySelectProps) => {
  return (
    <Select placeholder="Select your unit" focusBorderColor="gray.300" cursor="pointer" onChange={onCurrencyChange}>
      <option value="usd">USD</option>
      <option value="eur">EUR</option>
      <option value="pln">PLN</option>
      <option value="uah">UAH</option>
    </Select>
  );
};
