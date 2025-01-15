import { Select } from '@chakra-ui/react';

export const CurrencySelect = ({ onChange }: { onChange?: () => void }) => {
  return (
    <Select placeholder="Select your unit" focusBorderColor="gray.300" cursor="pointer" onChange={onChange}>
      <option value="usd">USD</option>
      <option value="eur">EUR</option>
      <option value="pln">PLN</option>
      <option value="uah">UAH</option>
    </Select>
  );
};
