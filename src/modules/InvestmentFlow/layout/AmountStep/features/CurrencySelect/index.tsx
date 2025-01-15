import { Currency } from '@shared/interfaces/Currency.interface';
import { currencies } from '@shared/mocks/Currencies.mocks';

import { Select } from '@chakra-ui/react';

interface CurrencySelectProps {
  onCurrencyChange?: () => void;
}

export const CurrencySelect = ({ onCurrencyChange }: CurrencySelectProps) => {
  return (
    <Select placeholder="Select your unit" focusBorderColor="gray.300" cursor="pointer" onChange={onCurrencyChange}>
      {currencies.map((currency: Currency, index: number) => (
        <option key={index} value={currency.value}>
          {currency.name}
        </option>
      ))}
    </Select>
  );
};
