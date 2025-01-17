import { FormControl, Select } from '@chakra-ui/react';

interface CountFieldProps {
  onChange: (value: string) => void;
}

export const CountField = ({ onChange }: CountFieldProps) => {
  return (
    <FormControl>
      <Select
        id="companyCount"
        name="companyCount"
        placeholder="How many companies do you want to"
        onChange={(e) => onChange(e.target.value)}>
        <option value="1-3">1-3</option>
        <option value="4-6">4-6</option>
        <option value="7+">7+</option>
      </Select>
    </FormControl>
  );
};
